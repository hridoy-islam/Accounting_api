import { z } from "zod";




const transactionSchema = z.object({
  body: z.object({
  transactionType: z.enum(["inflow", "outflow"], { required_error: "Transaction type is required." }),
  transactionDate: z.string({ required_error: "Transaction date is required." }).transform((str) => new Date(str)),
  invoiceNumber: z.string().optional(),
  invoiceDate: z.string().optional().transform((str) => (str ? new Date(str) : undefined)),
  details: z.string().optional(),
  description: z.string().optional(),
  transactionAmount: z.number({ required_error: "Transaction amount is required." }),
  transactionDoc: z.string().optional(),
  transactionCategory: z.string({ required_error: "Transaction category is required." }),
  transactionMethod: z.string({ required_error: "Transaction method is required." }),
  storage: z.string({ required_error: "Storage is required." }),
  })
  
});

export const transactionValidation = {
  transactionSchema,

};
