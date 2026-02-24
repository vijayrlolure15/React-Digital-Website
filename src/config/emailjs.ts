import emailjs from '@emailjs/browser';

/**
 * EMAILJS CONFIGURATION
 * Get these values from your EmailJS Dashboard: https://dashboard.emailjs.com/
 * IMPORTANT: In your EmailJS dashboard, set the recipient email to soloprojectplus@gmail.com
 * GOOGLE DRIVE: To save data/files to Drive, use a tool like Zapier or Make.com 
 * to connect your EmailJS/Webhook to Google Drive.
 */
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_rcn1sm9',
  TEMPLATE_ID: 'template_nk51ybc',
  PUBLIC_KEY: 'Ak35yUYuIjK7Vpf0O',
};

export interface FormData {
  subject: string;
  from_name: string;
  from_email: string;
  phone?: string;
  service?: string;
  message: string;
  extra?: Record<string, string>;
}

/**
 * Sends a form via EmailJS.
 */
export async function sendFormEmail(data: FormData): Promise<boolean> {
  // Check if unconfigured
  const isUnconfigured = !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.PUBLIC_KEY;

  if (isUnconfigured) {
    console.error('❌ FORMS ERROR: EmailJS is not configured yet.');
    return false;
  }

  try {
    const templateParams = {
      subject: data.subject,
      from_name: data.from_name,
      from_email: data.from_email,
      phone: data.phone || 'N/A',
      service: data.service || 'Not specified',
      message: data.message,
      ...(data.extra || {}),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return response.status === 200;
  } catch (err) {
    console.error('❌ EmailJS Submission Failed:', err);
    return false;
  }
}

/**
 * Helper to convert File to Base64 for EmailJS attachments
 */
export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

/**
 * Common validation regex
 */
export const VALIDATION = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s-]{10,}$/,
};
