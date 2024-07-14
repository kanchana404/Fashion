import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); // Replace with your Auth Token

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { phoneNumber } = body;

  try {
    await client.verify.services(process.env.TWILIO_APP as string)
      .verifications
      .create({ to: phoneNumber, channel: 'sms' });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
