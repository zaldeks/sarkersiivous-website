declare module '../config/emailjs' {
  interface EmailJSConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
  }

  export const emailConfig: EmailJSConfig;
}
