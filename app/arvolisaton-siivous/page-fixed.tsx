'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';

// Completely static page with no translations dependencies
export default function ArvolisatonSiivousPageFixed() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">ALV 0 % Siivouspalvelut yli 80-vuotiaille</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Arvolisäverottomat siivouspalvelut ikäihmisille</p>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">Tarjoamme arvolisäverottomia siivouspalveluita yli 80-vuotiaille asiakkaillemme. Tämä mahdollisuus perustuu sosiaalihuoltolakiin ja tekee palveluistamme edullisempia ikäihmisille.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">Mitä on ALV 0 % siivous?</h2>
              <p className="text-gray-700 mb-4">ALV 0 % siivous tarkoittaa, että palvelun hinnasta ei peritä arvonlisäveroa. Tämä tekee palvelusta edullisempaa asiakkaalle.</p>
              <p className="text-gray-700">Säästät 24 % palvelun hinnasta, kun palvelu on arvolisäveroton.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">Kenelle palvelu on tarkoitettu?</h2>
              <p className="text-gray-700 mb-4">Palvelu on tarkoitettu yli 80-vuotiaille henkilöille, jotka tarvitsevat apua kodin siivouksessa.</p>
              <p className="text-gray-700">Palvelun saaminen edellyttää palvelutarpeen arviointia.</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Tarjoamamme palvelut</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
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
              ].map((service, index) => (
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
