/* eslint-disable no-unused-vars */
import { Types } from "mongoose";


// Interface for Break periods within a work session
export interface TBreak {
  breakStartTime: string;
  breakStartLat: Number,
  breakStartLng: Number,
  breakEndTime?: string; // Optional, as a break may not have ended yet
  breakEndLat?: Number,
  breakEndLng?: Number,
}

// Interface for individual work sessions within an attendance record
export interface TSession {
  clockIn: string;
  clockInLat: Number,
  clockInLng: Number,
  clockOut?: string; // Optional, as the session may not have ended yet
  clockOutLat?: Number,
  clockOutLng?: Number,
  breaks: TBreak[]; // Array of breaks taken within this session
  totalWorkedHours: number; // Calculated in hours for this session
  totalBreakHours: number; // Calculated in hours for breaks within this session
  netHoursWorked: number; // Calculated in hours after deducting breaks for this session
}


// Interface for a single attendance record, including sessions and daily summaries
export interface TAttendance extends Document {
  userId: Types.ObjectId;
  date: Date; // The date of the attendance (based on the clock-in date, e.g., night shift recorded on start date)
  sessions: TSession[]; // Array of work sessions for this day, each session may span across midnight
  totalWorkedHours: number; // Sum of net hours worked across all sessions for this day
  totalBreakHours: number; // Sum of break hours across all sessions for this day
  netHoursWorked: number; // Total net hours worked for this day (after deducting all breaks)
  createdAt: Date; // Automatically generated by Mongoose
  updatedAt: Date; // Automatically generated by Mongoose
}