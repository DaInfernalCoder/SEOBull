import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '../../../libs/mongoose';
import Lead from '../../../models/Lead';

export async function POST(req: NextRequest) {
  try {
    console.log('Connecting to MongoDB...');
    await connectMongo();
    console.log('Connected to MongoDB successfully');

    const body = await req.json();
    console.log('Received form data:', body);

    const { 
      name, 
      email, 
      phone, // Added phone field
      message, 
      companyName, 
      industry, 
      websiteUrl, 
      businessGoals, 
      state, 
      city, 
      services 
    } = body;

    // Check if all required fields are present
    const requiredFields = [
      'name', 'email', 'phone', 'message', 'companyName', 'industry', 
      'websiteUrl', 'businessGoals', 'state', 'city'
    ];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return NextResponse.json({ 
        error: `Missing required fields: ${missingFields.join(', ')}` 
      }, { status: 400 });
    }

    console.log('Creating new Lead...');
    const newLead = new Lead({
      name,
      email,
      phone, // Added phone field
      message,
      companyName,
      industry,
      websiteUrl,
      businessGoals,
      state,
      city,
      services: {
        website: services.website || false,
        localSeo: services.localSeo || false,
        nationalSeo: services.nationalSeo || false,
      }
    });

    console.log('Saving new Lead to database...');
    await newLead.save();
    console.log('Lead saved successfully');

    return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}