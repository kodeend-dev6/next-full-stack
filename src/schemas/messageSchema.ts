import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Message must contain at least 10 character" })
    .max(500, { message: "Message must contain at most 500 characters" }),
});
