import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); // Replace with your Auth Token

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { phoneNumber, verificationCode } = body;

  try {
    const verificationCheck = await client.verify.services(process.env.TWILIO_APP as string)
      .verificationChecks
      .create({ to: phoneNumber, code: verificationCode });

    if (verificationCheck.status === 'approved') {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
