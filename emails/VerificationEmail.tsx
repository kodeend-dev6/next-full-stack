import { Head, Html, Section, Text } from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export const VerificationEmail = async ({
  username,
  otp,
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code </title>
        {/* <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={}
          fontWeight={400}
          fontStyle="normal"
        /> */}
      </Head>

      <Section>
        <Text>Hello {username},</Text>
        <Text>Your verification code : {otp}</Text>
      </Section>
    </Html>
  );
};
