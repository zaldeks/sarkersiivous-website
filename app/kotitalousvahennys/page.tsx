'use client';

import { useLanguage } from '../context/LanguageContext';
import { CalculatorIcon, DocumentCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function KotitalousVahennysPage() {
  const { translations } = useLanguage();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#27ae60] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {translations.householdDeductionTitle}
            </h1>
            <p className="text-xl opacity-90">
              {translations.householdDeductionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* What is Kotitalousvähennys */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">{translations.whatIsHouseholdDeduction}</h2>
            <p className="text-lg text-gray-600">
              {translations.whatIsHouseholdDeductionDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Example Calculation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-4 mr-4">
                  <CalculatorIcon className="w-8 h-8 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">{translations.exampleCalculationTitle}</h2>
              </div>
              
              <div className="space-y-6 text-lg">
                <div className="flex justify-between items-center border-b pb-4">
                  <span>{translations.originalPrice}</span>
                  <span className="font-semibold">320€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4 text-[#27ae60]">
                  <span>{translations.householdDeduction} (35%)</span>
                  <span className="font-semibold">-112€</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-xl font-bold">
                  <span>{translations.finalPrice}</span>
                  <span>208€</span>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-4 mr-4">
                  <DocumentCheckIcon className="w-8 h-8 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">{translations.howToGetDeductionTitle}</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">1</span>
                  </div>
                  <p className="text-lg">{translations.step1Desc}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">2</span>
                  </div>
                  <p className="text-lg">{translations.step2Desc}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">3</span>
                  </div>
                  <p className="text-lg">{translations.step3Desc}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">4</span>
                  </div>
                  <p className="text-lg">{translations.step4Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maximum Deduction Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="flex items-start max-w-3xl mx-auto">
              <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-4 mr-6 mt-1">
                <SparklesIcon className="w-8 h-8 text-[#27ae60]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{translations.maximumDeductionTitle}</h3>
                <p className="text-lg text-gray-600 mb-4">
                  {translations.maximumDeductionDesc}
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-lg font-semibold">
                    {translations.maximumDeductionExample}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">{translations.startSavingToday}</h2>
            <div className="flex justify-center gap-4">
              <Link 
                href="/ota-yhteytta" 
                className="bg-[#27ae60] text-white px-8 py-4 rounded-lg hover:bg-[#219a54] transition-colors text-lg font-medium"
              >
                {translations.requestOffer}
              </Link>
              <Link 
                href="/palvelut" 
                className="border-2 border-[#27ae60] text-[#27ae60] px-8 py-4 rounded-lg hover:bg-[#27ae60] hover:text-white transition-colors text-lg font-medium"
              >
                {translations.seeOurServices}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
