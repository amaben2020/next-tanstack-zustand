import { z } from "zod";
// Build a schema that matches values in our form.
export const stepTwo = z.object({
  token: z.string().min(1, { message: "Token is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  isOutside: z.boolean(),
});

export type TUserSchema = z.infer<typeof stepTwo>;
