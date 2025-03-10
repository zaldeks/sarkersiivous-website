'use client';

import { useLanguage } from '../context/LanguageContext';
import { CheckCircleIcon, CalculatorIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ArvolisatonSiivousPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#27ae60] text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ALV 0 % Siivouspalvelut yli 80-vuotiaille
            </h1>
            <p className="text-xl opacity-90">
              Tarjoamme ALV 0 %:n siivouspalvelut yli 80-vuotiaille asiakkaille!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-lg text-gray-600 mb-16">
            <p>
              Suomen verolainsäädännön mukaisesti kotitalouspalvelut, kuten siivous, ovat arvonlisäverottomia (ALV 0 %), 
              kun ne tarjotaan yli 80-vuotiaille henkilöille. Tämän avulla voimme tarjota ammattimaista siivouspalvelua 
              edullisemmin ikäihmisille, jotka haluavat pitää kotinsa siistinä ja viihtyisänä.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* What is ALV 0% */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-4 mr-4">
                  <CalculatorIcon className="w-8 h-8 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">Mitä ALV 0 % tarkoittaa?</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Et maksa arvonlisäveroa (ALV) siivouspalveluista. Esimerkiksi, jos palvelun hinta on 100 €, maksat vain 74.5€ (ilman 25.5 % ALV:ia).
                </p>
                <p className="text-lg text-gray-600">
                  ALV-vapaus tekee siivouspalveluista huomattavasti edullisempia, mikä helpottaa säännöllisen siivouksen mahdollistamista.
                </p>
              </div>
            </div>

            {/* Who is it for */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-4 mr-4">
                  <UserGroupIcon className="w-8 h-8 text-[#27ae60]" />
                </div>
                <h2 className="text-2xl font-bold">Kenelle palvelu on tarkoitettu?</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Palvelu on tarkoitettu yli 80-vuotiaille henkilöille, jotka asuvat omassa kodissaan.
                </p>
                <p className="text-lg text-gray-600">
                  ALV-vapaus koskee sekä yksityishenkilöitä että heidän kotitalouksiaan.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Mitä palveluita tarjoamme ALV 0 %:lla?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perussiivous</h3>
                    <p className="text-gray-600">Pölyjen pyyhintä, imurointi, moppaus.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kylpyhuoneen siivous</h3>
                    <p className="text-gray-600">WC:n, pesualtaan ja suihkun puhdistus.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Keittiön siivous</h3>
                    <p className="text-gray-600">Tiskialtaan, liedon ja jääkaapin ulkopinnan puhdistus.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lisäpalvelut</h3>
                    <p className="text-gray-600">Ikkunoiden puhdistus, mattojen pesu ja muut tarpeen mukaan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Order */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Miten tilata ALV 0 % siivouspalvelu?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">1</span>
                  </div>
                  <p className="text-lg">Ota yhteyttä meille ja kerro tarpeistasi.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">2</span>
                  </div>
                  <p className="text-lg">Varmistamme yhdessä, että palvelu täyttää ALV-vapauden ehdot.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full p-2 mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">3</span>
                  </div>
                  <p className="text-lg">Sovimme siivouksen ajankohdan ja keston.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Miksi valita meidät?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <p className="text-lg">Olemme ALV-rekisteröity siivousyritys, joka noudattaa kaikkia verolainsäädännön vaatimuksia.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <p className="text-lg">Tarjoamme joustavia ja luotettavia siivousratkaisuja, jotka helpottavat arkea.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-4 flex-shrink-0" />
                  <p className="text-lg">Asiakkaidemme hyvinvointi on meille tärkeää, ja teemme kaikkemme, jotta koti pysyisi siistinä ja turvallisena.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ota yhteyttä ja kysy lisää!</h2>
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
