'use client';

import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const { translations } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      selectedServices: Array.from(formData.getAll('services')),
      squareMeters: formData.get('squareMeters'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!translations) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27ae60]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">{translations.contactTitle}</h1>
          <p className="text-xl text-gray-600 text-center mb-12">{translations.contactDesc}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {translations.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#27ae60] focus:border-[#27ae60]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {translations.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#27ae60] focus:border-[#27ae60]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {translations.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#27ae60] focus:border-[#27ae60]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.servicesLabel}
                  </label>
                  <div className="space-y-2">
                    {Object.values(translations.priceCalculator).slice(0, 3).map((service, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`service-${index}`}
                          name="services"
                          value={service}
                          className="h-4 w-4 text-[#27ae60] focus:ring-[#27ae60] border-gray-300 rounded"
                        />
                        <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-700">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="squareMeters" className="block text-sm font-medium text-gray-700 mb-1">
                    {translations.squareMetersLabel}
                  </label>
                  <select
                    id="squareMeters"
                    name="squareMeters"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#27ae60] focus:border-[#27ae60]"
                  >
                    {Object.entries(translations.priceCalculator.sizeRanges).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {translations.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#27ae60] focus:border-[#27ae60]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 border border-transparent rounded-lg text-white font-medium ${
                    isSubmitting ? 'bg-gray-400' : 'bg-[#27ae60] hover:bg-[#219a54]'
                  } transition-colors`}
                >
                  {isSubmitting ? translations.sending : translations.sendMessage}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg">
                    {translations.emailSentSuccess}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg">
                    {translations.emailSentError}
                  </div>
                )}
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6">{translations.contactInfo}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">{translations.address}</h3>
                  <p className="text-gray-600">Helsinki, Finland</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">{translations.email}</h3>
                  <a href="mailto:myynti@sarkersiivous.fi" className="text-[#27ae60] hover:underline">
                    myynti@sarkersiivous.fi
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">{translations.phone}</h3>
                  <a href="tel:+358443296873" className="text-[#27ae60] hover:underline">
                    +358 44 329 6873
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">{translations.businessHours}</h3>
                  <p className="text-gray-600">{translations.businessHoursValue}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">{translations.serviceAreas}</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {translations.footer.serviceAreas.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>

                <Image
                  src="/images/contact.jpg"
                  alt="Contact Us"
                  width={400}
                  height={300}
                  className="rounded-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
