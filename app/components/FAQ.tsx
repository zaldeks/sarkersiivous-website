'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { translations } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!translations?.faqQuestions) {
    return null; // Return null if translations are not yet loaded
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{translations.faqTitle}</h2>
        <div className="space-y-4">
          {translations.faqQuestions.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-[#27ae60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
