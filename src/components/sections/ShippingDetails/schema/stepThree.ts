import { z } from "zod";
// Build a schema that matches values in our form.
export const stepThree = z.object({
  company: z.string().min(1, { message: "Company is required" }),
  country: z.string(),
  zip: z.string().min(3).max(5),
});

export type TUserSchema = z.infer<typeof stepThree>;
