interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const emailConfig: EmailJSConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
};
