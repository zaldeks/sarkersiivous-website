'use client';

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

export default function Contact() {
  const { translations } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    service: 'basic',
    size: '20-50'
  });

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate time based on service and size
  const calculateTime = (size: string) => {
    const [minSize, maxSize] = size.split('-').map(s => parseInt(s) || parseInt(size));
    const avgSize = maxSize || minSize;

    switch (quoteForm.service) {
      case 'basic':
        return Math.ceil((avgSize / 50) * 2); // 2 hours per 50m²
      case 'move':
        return Math.ceil((avgSize / 30) * 3); // 3 hours per 30m²
      case 'window':
        return Math.ceil((avgSize / 60) * 1); // 1 hour per 60m²
      default:
        return 2;
    }
  };

  // Calculate prices based on time
  const calculatePrices = () => {
    const hours = calculateTime(quoteForm.size);
    const hourlyRate = 46; // €46 per hour including VAT
    const priceWithVAT = hours * hourlyRate;
    const priceWithoutVAT = priceWithVAT / 1.255; // VAT is 25.5%
    const priceAfterDeduction = priceWithVAT * 0.65; // 35% tax deduction

    return {
      hours,
      withVAT: Math.round(priceWithVAT),
      withoutVAT: Math.round(priceWithoutVAT),
      afterDeduction: Math.round(priceAfterDeduction)
    };
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const prices = calculatePrices();
    const serviceTranslation = quoteForm.service === 'basic' 
      ? translations.priceCalculator.basicCleaning
      : quoteForm.service === 'move'
      ? translations.priceCalculator.moveCleaning
      : translations.priceCalculator.windowCleaning;
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: quoteForm.name,
          email: quoteForm.email,
          phone: quoteForm.phone,
          service: serviceTranslation,
          size: quoteForm.size + ' m²',
          details: quoteForm.details,
          estimatedHours: `${prices.hours} ${translations.priceCalculator.hours}`,
          priceWithVAT: `${prices.withVAT} €`,
          priceWithoutVAT: `${prices.withoutVAT} €`,
          priceAfterDeduction: `${prices.afterDeduction} €`
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || translations.formErrorGeneric);
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || translations.formErrorGeneric);
      }

      setSubmitStatus('success');
      setQuoteForm({
        name: '',
        email: '',
        phone: '',
        details: '',
        service: 'basic',
        size: '20-50'
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setErrorMessage((error as Error).message || translations.formErrorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Wait for client-side hydration and translations
  if (!mounted || !translations) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="/images/services/ota-yhteytta.jpg"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {translations.contactUs}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {translations.contactDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleQuoteSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {translations.formName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={quoteForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#27ae60] focus:ring-[#27ae60]"
                  placeholder={translations.formName}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {translations.formEmail} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={quoteForm.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#27ae60] focus:ring-[#27ae60]"
                  placeholder={translations.formEmail}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {translations.formPhone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={quoteForm.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#27ae60] focus:ring-[#27ae60]"
                  placeholder={translations.formPhone}
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  {translations.formService} <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={quoteForm.service}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#27ae60] focus:ring-[#27ae60]"
                >
                  <option value="basic">{translations.priceCalculator.basicCleaning}</option>
                  <option value="move">{translations.priceCalculator.moveCleaning}</option>
                  <option value="window">{translations.priceCalculator.windowCleaning}</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                  {translations.formSize} <span className="text-red-500">*</span>
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  value={quoteForm.size}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#27ae60] focus:ring-[#27ae60]"
                >
                  <option value="20-50">20-50 m²</option>
                  <option value="50-75">50-75 m²</option>
                  <option value="75-100">75-100 m²</option>
                  <option value="100-150">100-150 m²</option>
                  <option value="150-200">150-200 m²</option>
                  <option value="200-250">200-250 m²</option>
                  <option value="250">250+ m²</option>
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                {translations.formDetails}
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                value={quoteForm.details}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#27ae60] focus:ring-[#27ae60]"
                placeholder={translations.formDetails}
              />
            </div>

            {/* Price Estimate */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <h3 className="font-medium text-gray-900">{translations.priceCalculator.priceEstimator}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">{translations.priceCalculator.estimatedTime}</p>
                  <p className="text-lg font-medium text-gray-900">
                    {calculatePrices().hours} {translations.priceCalculator.hours}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{translations.priceCalculator.priceWithVAT}</p>
                  <p className="text-lg font-medium text-gray-900">
                    {calculatePrices().withVAT} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{translations.priceCalculator.priceWithoutVAT}</p>
                  <p className="text-lg font-medium text-gray-900">
                    {calculatePrices().withoutVAT} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{translations.priceCalculator.priceAfterDeduction}</p>
                  <p className="text-lg font-medium text-[#27ae60]">
                    {calculatePrices().afterDeduction} €
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#27ae60] text-white py-3 px-6 rounded-lg hover:bg-[#219a54] transition-colors font-semibold disabled:opacity-50"
            >
              {isSubmitting ? '...' : translations.formSubmit}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                {translations.formSuccess}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                {errorMessage || translations.formErrorGeneric}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
