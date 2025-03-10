'use client';

import { useLanguage } from '../context/LanguageContext';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

// Type for the VAT-free service
interface VatFreeService {
  title: string;
  description: string;
}

// Extended translations type with the fields we need
interface ExtendedTranslations {
  vatFreeTitle: string;
  vatFreeDesc: string;
  vatFreeIntro: string;
  whatIsVatFree: string;
  vatFreeExplanation: string;
  vatFreeBenefitsDesc: string;
  whoIsItFor: string;
  whoIsItForDesc: string;
  whoIsItForAdditional: string;
  servicesTitle: string;
  vatFreeServices: VatFreeService[];
  [key: string]: any; // Allow other properties
}

export default function ArvolisatonSiivousPage() {
  const { translations } = useLanguage();

  if (!translations) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27ae60]"></div>
      </div>
    );
  }

  // Type cast translations to our extended interface
  const trans = translations as unknown as ExtendedTranslations;

  return (
    <main className="min-h-screen pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">{trans.vatFreeTitle}</h1>
          <p className="text-xl text-gray-600 text-center mb-12">{trans.vatFreeDesc}</p>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">{trans.vatFreeIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{trans.whatIsVatFree}</h2>
              <p className="text-gray-700 mb-4">{trans.vatFreeExplanation}</p>
              <p className="text-gray-700">{trans.vatFreeBenefitsDesc}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{trans.whoIsItFor}</h2>
              <p className="text-gray-700 mb-4">{trans.whoIsItForDesc}</p>
              <p className="text-gray-700">{trans.whoIsItForAdditional}</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">{trans.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trans.vatFreeServices.map((service: VatFreeService, index: number) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-[#27ae60] mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
