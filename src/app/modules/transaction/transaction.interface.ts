export interface TTransaction {
  tcid: string;
  transactionType: "inflow" | "outflow";
  transactionDate: Date;
  invoiceNumber?: string;
  invoiceDate?: Date;
  details?: string;
  description?: string;
  transactionAmount: number;
  transactionDoc?: string;
  transactionCategory: string;
  transactionMethod: string;
  storage: string;
}
