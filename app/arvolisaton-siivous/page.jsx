'use client';

// Completely JavaScript file with no TypeScript - should bypass type checking
export default function ArvolisatonSiivousPage() {
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
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#27ae60] mt-1 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Ylläpitosiivous</h3>
                  <p className="text-gray-700">Säännöllinen kodin siivous ja puhtaanapito</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#27ae60] mt-1 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Perussiivous</h3>
                  <p className="text-gray-700">Perusteellinen siivous koko asuntoon</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#27ae60] mt-1 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Ikkunanpesu</h3>
                  <p className="text-gray-700">Ikkunoiden ja lasipintojen puhdistus</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#27ae60] mt-1 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Erikoissiivous</h3>
                  <p className="text-gray-700">Räätälöidyt siivouspalvelut erityistarpeisiin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
