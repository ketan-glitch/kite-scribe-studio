/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// ✅ CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ketank39@gmail.com",
      subject: "New Contact Form Submission",
      // html: `
      //   <h3>New Message</h3>
      //   <p><b>Name:</b> ${name}</p>
      //   <p><b>Email:</b> ${email}</p>
      //   <p>${message}</p>
      // `,
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <div style="background: #2563eb; padding: 16px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">KITE Stationary</h2>
        <p style="color: #dbeafe; margin: 4px 0 0;">New Contact Form Submission</p>
      </div>

      <!-- Body -->
      <div style="padding: 20px;">
        <p style="color: #374151; font-size: 14px;">You have received a new message from your website:</p>

        <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #111827;">Name:</td>
            <td style="padding: 8px; color: #374151;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #111827;">Email:</td>
            <td style="padding: 8px; color: #2563eb;">${email}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top: 16px;">
          <p style="font-weight: bold; color: #111827;">Message:</p>
          <div style="background: #f3f4f6; padding: 12px; border-radius: 6px; color: #374151; line-height: 1.5;">
            ${message}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 12px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
        This email was sent from your website contact form.
      </div>

    </div>
  </div>
`,
    });

    return new Response(JSON.stringify({ data, error }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
});