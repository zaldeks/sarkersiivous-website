'use client';

import { useLanguage } from '../context/LanguageContext';
import { CalculatorIcon, DocumentCheckIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function KotitalousVahennysPage() {
  const { translations } = useLanguage();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#27ae60] text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kotitalousvähennys
            </h1>
            <p className="text-xl opacity-90">
              Säästä 35% siivouspalveluista kotitalousvähennyksen avulla
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* What is Kotitalousvähennys */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Mikä on kotitalousvähennys?</h2>
            <p className="text-lg text-gray-600">
              Kotitalousvähennys on verovähennys, jonka saat teettäessäsi kotitaloustyötä, kuten siivousta. 
              Vähennys on 35% työn osuudesta ja se vähennetään suoraan maksettavasta verostasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Example Calculation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-4 mr-4">
                  <CalculatorIcon className="w-8 h-8 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">Esimerkki säästöistäsi</h2>
              </div>
              
              <div className="space-y-6 text-lg">
                <div className="flex justify-between items-center border-b pb-4">
                  <span>Alkuperäinen hinta</span>
                  <span className="font-semibold">320€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4 text-[#27ae60]">
                  <span>Kotitalousvähennys (35%)</span>
                  <span className="font-semibold">-112€</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-xl font-bold">
                  <span>Lopullinen hinta</span>
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
                <h2 className="text-2xl font-bold">Näin saat vähennyksen</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">1</span>
                  </div>
                  <p className="text-lg">Tilaa siivouspalvelumme</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">2</span>
                  </div>
                  <p className="text-lg">Maksa lasku</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">3</span>
                  </div>
                  <p className="text-lg">Saat meiltä todistuksen verovähennystä varten</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">4</span>
                  </div>
                  <p className="text-lg">Ilmoita vähennys veroilmoituksessasi</p>
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
                <h3 className="text-2xl font-bold mb-4">Vuosittainen enimmäismäärä</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Kotitalousvähennyksen enimmäismäärä on 1600€ per työssäkäyvä henkilö vuodessa.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-lg font-semibold">
                    Esimerkki: Jos taloudessasi on kaksi työssäkäyvää henkilöä, voitte saada yhteensä 3200€ vähennystä vuodessa!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Aloita säästäminen jo tänään!</h2>
            <div className="flex justify-center gap-4">
              <Link 
                href="/ota-yhteytta" 
                className="bg-[#27ae60] text-white px-8 py-4 rounded-lg hover:bg-[#219a54] transition-colors text-lg font-medium"
              >
                Pyydä tarjous
              </Link>
              <Link 
                href="/palvelut" 
                className="border-2 border-[#27ae60] text-[#27ae60] px-8 py-4 rounded-lg hover:bg-[#27ae60] hover:text-white transition-colors text-lg font-medium"
              >
                Katso palvelumme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
