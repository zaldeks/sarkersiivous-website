'use client';

import { useLanguage } from '../context/LanguageContext';

export default function TaxCredit() {
  const { translations } = useLanguage();

  if (!translations) {
    return null;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="/images/tax-credit/hero.jpg"
            alt="Household tax credit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kotitalousvähennys
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Säästä jopa 40% siivouspalveluiden kustannuksista
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg">
            <h2>Mitä on kotitalousvähennys?</h2>
            <p>
              Kotitalousvähennys on verotuksessa tehtävä vähennys, jonka voit saada kotona teetetystä työstä, kuten siivouksesta. 
              Vähennys tehdään suoraan verosta, ei tulosta. Voit saada kotitalousvähennystä 40% työkorvauksesta, jos ostat työn yritykseltä.
            </p>

            <h3>Kotitalousvähennyksen määrä</h3>
            <ul>
              <li>Vähennyksen enimmäismäärä on 2 250 euroa vuodessa</li>
              <li>Vähennyksen omavastuu on 100 euroa vuodessa</li>
              <li>Voit vähentää 40% työkorvauksesta</li>
              <li>Vähennys on henkilökohtainen, joten puolisot voivat saada yhteensä 4 500 euroa</li>
            </ul>

            <h3>Miten kotitalousvähennys toimii?</h3>
            <ol>
              <li>Tilaa siivouspalvelu meiltä</li>
              <li>Maksa lasku</li>
              <li>Säilytä kuitti verotusta varten</li>
              <li>Ilmoita tiedot veroilmoituksessa</li>
            </ol>

            <h3>Esimerkki säästöistä</h3>
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <p className="font-semibold">Siivouspalvelun hinta: 100€</p>
              <ul>
                <li>Kotitalousvähennys (40%): -40€</li>
                <li>Lopullinen kustannus: 60€</li>
              </ul>
            </div>

            <div className="bg-[#27ae60] text-white p-6 rounded-lg my-8">
              <h3 className="text-white">Haluatko tietää lisää?</h3>
              <p>Ota yhteyttä meihin, niin kerromme mielellämme lisää kotitalousvähennyksestä ja siivouspalveluistamme.</p>
              <a 
                href="/ota-yhteytta" 
                className="inline-block bg-white text-[#27ae60] px-6 py-2 rounded-full mt-4 hover:bg-gray-100 transition-colors"
              >
                Ota yhteyttä
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
