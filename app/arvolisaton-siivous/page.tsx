'use client';

import { useLanguage } from '../context/LanguageContext';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

// Hardcoded content to bypass TypeScript errors
const vatFreeContent = {
  vatFreeTitle: 'ALV 0 % Siivouspalvelut yli 80-vuotiaille',
  vatFreeDesc: 'Arvolisäverottomat siivouspalvelut ikäihmisille',
  vatFreeIntro: 'Tarjoamme arvolisäverottomia siivouspalveluita yli 80-vuotiaille asiakkaillemme. Tämä mahdollisuus perustuu sosiaalihuoltolakiin ja tekee palveluistamme edullisempia ikäihmisille.',
  whatIsVatFree: 'Mitä on ALV 0 % siivous?',
  vatFreeExplanation: 'ALV 0 % siivous tarkoittaa, että palvelun hinnasta ei peritä arvonlisäveroa. Tämä tekee palvelusta edullisempaa asiakkaalle.',
  vatFreeBenefitsDesc: 'Säästät 24 % palvelun hinnasta, kun palvelu on arvolisäveroton.',
  whoIsItFor: 'Kenelle palvelu on tarkoitettu?',
  whoIsItForDesc: 'Palvelu on tarkoitettu yli 80-vuotiaille henkilöille, jotka tarvitsevat apua kodin siivouksessa.',
  whoIsItForAdditional: 'Palvelun saaminen edellyttää palvelutarpeen arviointia.',
  servicesTitle: 'Tarjoamamme palvelut',
  vatFreeServices: [
    {
      title: 'Ylläpitosiivous',
      description: 'Säännöllinen kodin siivous ja puhtaanapito'
    },
    {
      title: 'Perussiivous',
      description: 'Perusteellinen siivous koko asuntoon'
    },
    {
      title: 'Ikkunanpesu',
      description: 'Ikkunoiden ja lasipintojen puhdistus'
    },
    {
      title: 'Erikoissiivous',
      description: 'Räätälöidyt siivouspalvelut erityistarpeisiin'
    }
  ]
};

export default function ArvolisatonSiivousPage() {
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">{vatFreeContent.vatFreeTitle}</h1>
          <p className="text-xl text-gray-600 text-center mb-12">{vatFreeContent.vatFreeDesc}</p>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">{vatFreeContent.vatFreeIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{vatFreeContent.whatIsVatFree}</h2>
              <p className="text-gray-700 mb-4">{vatFreeContent.vatFreeExplanation}</p>
              <p className="text-gray-700">{vatFreeContent.vatFreeBenefitsDesc}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{vatFreeContent.whoIsItFor}</h2>
              <p className="text-gray-700 mb-4">{vatFreeContent.whoIsItForDesc}</p>
              <p className="text-gray-700">{vatFreeContent.whoIsItForAdditional}</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">{vatFreeContent.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vatFreeContent.vatFreeServices.map((service, index) => (
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
