'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function TaxCreditPage() {
  const { translations } = useLanguage();

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
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/tax-credit/hero.jpg"
            alt="Household tax credit"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {translations.householdDeductionTitle}
              </h1>
              <p className="text-xl text-white opacity-90">
                {translations.householdDeductionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>{translations.whatIsTaxCredit}</h2>
            <p>{translations.taxCreditExplanation}</p>

            <h2>{translations.howMuchCanYouSave}</h2>
            <p>{translations.savingsExplanation}</p>

            <h2>{translations.servicesTitle}</h2>
            <ul>
              {translations.taxCreditServices.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <h2>{translations.howToApply}</h2>
            <p>{translations.applicationProcess}</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3>{translations.needHelp}</h3>
              <p>{translations.helpText}</p>
              <Link
                href="/ota-yhteytta"
                className="bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a54] transition-colors inline-block mt-6"
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
