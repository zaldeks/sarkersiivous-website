export const env = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
}

// Validate environment variables
export function validateEnv() {
  const required = ['RESEND_API_KEY'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
