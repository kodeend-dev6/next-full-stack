import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, { message: "User name must be at lest 2 characters" })
  .max(30, { message: "User name must be at most 30 characters" })
  .regex(/^[a-zA-Z0-9]*$/, {
    message: "User name must contain only letters, numbers",
  });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
