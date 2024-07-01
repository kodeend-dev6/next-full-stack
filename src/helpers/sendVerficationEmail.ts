import { ApiResponse } from "@/types/ApiResponse";
import { VerificationEmail } from "../../emails/VerificationEmail";
import { resend } from "@/lib/resend";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "you@example.com",
      to: email,
      subject: "hello world",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: false, message: "Email sending failed" };
  } catch (error) {
    console.error("Email sending failed", error);
    return { success: false, message: "Email sending failed" };
  }
}
