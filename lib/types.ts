import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type MyFormState = {
  success: boolean;
  error?: string;
  message: string;
};


export type ProductType = InferSelectModel<typeof products>;