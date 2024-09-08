import { NextRequest, NextResponse } from 'next/server';
import db from '../../../libs/mongoose';
import Lead from '../../../models/Lead';

export async function POST(req: NextRequest) {
  try {
    await db();
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newLead = new Lead({
      name,
      email,
      message
    });

    await newLead.save();

    return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}