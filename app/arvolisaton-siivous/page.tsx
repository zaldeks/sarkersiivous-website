'use client';

import { useLanguage } from '../context/LanguageContext';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
}

export default function ArvolisatonSiivousPage() {
  const { language, translations } = useLanguage();

  if (!translations) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27ae60]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {translations.vatFreeTitle}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {translations.vatFreeDesc}
          </p>
          <Link
            href="/ota-yhteytta"
            className="bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a54] transition-colors inline-block"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p>{translations.vatFreeIntro}</p>

            {/* What is VAT-free */}
            <div className="bg-white rounded-lg shadow-sm p-8 my-8">
              <h2 className="text-2xl font-bold mb-4">{translations.whatIsVatFree}</h2>
              <p>{translations.vatFreeExplanation}</p>
              <p className="mt-4">{translations.vatFreeBenefitsDesc}</p>
            </div>

            {/* Who is it for */}
            <div className="bg-gray-50 rounded-lg p-8 my-8">
              <h2 className="text-2xl font-bold mb-4">{translations.whoIsItFor}</h2>
              <p>{translations.whoIsItForDesc}</p>
              <p className="mt-4">{translations.whoIsItForAdditional}</p>
            </div>

            {/* Services */}
            <section className="py-12 bg-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">{translations.servicesTitle}</h2>
                <div className="space-y-6">
                  {translations.vatFreeServices.map((service: Service, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How to Order */}
            <section className="py-12 bg-gray-50">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">{translations.howToOrderTitle}</h2>
                <div className="space-y-6">
                  {translations.howToOrder.map((step: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                        <span className="text-[#27ae60] font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-lg">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 bg-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">{translations.whyChooseUsTitle}</h2>
                <div className="space-y-6">
                  {translations.whyChooseUs.map((reason: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                      <p className="text-lg">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">{translations.ctaTitle}</h2>
              <Link
                href="/ota-yhteytta"
                className="bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a54] transition-colors inline-block"
              >
                {translations.getQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
