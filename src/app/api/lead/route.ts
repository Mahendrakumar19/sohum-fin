import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, loanAmount, city, message } = body;

    // Server-side validation
    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { success: false, message: "Missing required contact details." },
        { status: 400 }
      );
    }

    // In production, this can send an email via Resend/SendGrid/Nodemailer or insert into PostgreSQL/Prisma
    // For now, securely log and return successful response
    console.log("=== [LEAD ENQUIRY RECEIVED] ===");
    console.log({
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      service,
      loanAmount,
      city,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry successfully recorded. Our team will contact you shortly.",
      leadId: `SF-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error("Error processing lead enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
