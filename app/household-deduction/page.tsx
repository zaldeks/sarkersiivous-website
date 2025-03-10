import { useLanguage } from '../context/LanguageContext';
import { CalculatorIcon, DocumentCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function HouseholdDeductionPage() {
  const { translations } = useLanguage();

  // Early return with loading state
  if (!translations) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27ae60]"></div>
      </div>
    );
  }

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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Example */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-3 mr-4">
                  <CalculatorIcon className="w-6 h-6 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">{translations.deductionExample}</h2>
              </div>
              
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>{translations.deductionOriginal}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2 text-[#27ae60]">
                  <span>{translations.deductionAmount}</span>
                </div>
                <div className="flex justify-between items-center pt-2 font-bold">
                  <span>{translations.deductionFinal}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">{translations.deductionNote}</p>
              </div>
            </div>

            {/* Right Column - How To */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-3 mr-4">
                  <DocumentCheckIcon className="w-6 h-6 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">{translations.deductionHowTo}</h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg">{translations.deductionStep1}</p>
                <p className="text-lg">{translations.deductionStep2}</p>
                <p className="text-lg">{translations.deductionStep3}</p>
                <p className="text-lg">{translations.deductionStep4}</p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start max-w-3xl mx-auto">
              <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-3 mr-4">
                <SparklesIcon className="w-6 h-6 text-[#27ae60]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{translations.deductionRate}</h3>
                <p className="text-gray-600">{translations.deductionInfo}</p>
                <p className="mt-4 font-semibold">{translations.deductionMaxYear}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
