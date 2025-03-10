export interface TranslationType {
  nav: {
    home: string;
    about: string;
    services: string;
    taxCredit: string;
    vatFree: string;
    blog: string;
    contact: string;
  };
  footer: {
    company: string;
    address: string;
    phone: string;
    email: string;
    vatNumber: string;
    serviceAreas: string[];
  };
  aboutTitle: string;
  aboutDesc: string;
  ourStory: string;
  ourStoryContent: string;
  ourStoryExtra: string;
  ourValues: string;
  valuesList: Array<{
    title: string;
    description: string;
  }>;
  whyChooseUs: string;
  whyChooseUsList: Array<{
    title: string;
    description: string;
  }>;
  ourTeam: string;
  ourTeamDesc: string;
  teamQualities: string[];
  ourCommitment: string;
  ourCommitmentDesc: string;
  commitmentPoints: string[];
  serviceAreas: string;
  regions: string;
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
  vatFreeServices: Array<{
    title: string;
    description: string;
  }>;
  blogTitle: string;
  blogDesc: string;
  blogComingSoon: string;
  taxCreditTitle: string;
  taxCreditDesc: string;
  taxCreditContent: string[];
  taxCreditExtra: string;
  contactTitle: string;
  contactDesc: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  formError: string;
}

const translations: TranslationType = {
  nav: {
    home: 'Etusivu',
    about: 'Tietoa meistä',
    services: 'Palvelut',
    taxCredit: 'Kotitalousvähennys',
    vatFree: 'Arvolisäveroton siivous',
    blog: 'Blogi',
    contact: 'Ota yhteyttä'
  },
  footer: {
    company: 'Sarker Siivous',
    address: 'Helsinki, Finland',
    phone: '+358 45 861 3571',
    email: 'info@sarkersiivous.fi',
    vatNumber: 'Y-tunnus: 3338744-5',
    serviceAreas: ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen']
  },
  aboutTitle: 'Tietoa meistä',
  aboutDesc: 'Laadukasta ja luotettavaa siivouspalvelua Helsingissä',
  ourStory: 'Meidän tarinamme',
  ourStoryContent: 'Sarker Siivous on vuonna 2023 perustettu siivousalan yritys, joka tarjoaa laadukkaita siivouspalveluita Helsingin alueella. Yrityksemme perustuu vahvaan ammattitaitoon ja asiakaslähtöiseen palveluun.',
  ourStoryExtra: 'Tavoitteenamme on tarjota parasta mahdollista siivouspalvelua kilpailukykyiseen hintaan.',
  ourValues: 'Arvomme',
  valuesList: [
    {
      title: 'Laatu',
      description: 'Teemme työmme aina parhaalla mahdollisella tavalla ja varmistamme asiakkaidemme tyytyväisyyden.'
    },
    {
      title: 'Luotettavuus',
      description: 'Pidämme kiinni sovituista aikatauluista ja toimimme aina ammattimaisesti.'
    },
    {
      title: 'Asiakaslähtöisyys',
      description: 'Kuuntelemme asiakkaidemme toiveita ja räätälöimme palvelumme niiden mukaan.'
    }
  ],
  whyChooseUs: 'Miksi valita meidät?',
  whyChooseUsList: [
    {
      title: 'Ammattitaito',
      description: 'Henkilökuntamme on koulutettua ja kokenutta.'
    },
    {
      title: 'Joustavuus',
      description: 'Mukaudumme asiakkaidemme aikatauluihin ja tarpeisiin.'
    },
    {
      title: 'Kilpailukykyiset hinnat',
      description: 'Tarjoamme laadukasta palvelua kohtuulliseen hintaan.'
    },
    {
      title: 'Ympäristöystävällisyys',
      description: 'Käytämme ympäristöystävällisiä siivousaineita ja -menetelmiä.'
    }
  ],
  ourTeam: 'Meidän tiimimme',
  ourTeamDesc: 'Ammattitaitoinen ja luotettava henkilökunta',
  teamQualities: [
    'Koulutetut ammattilaiset',
    'Luotettavat työntekijät',
    'Asiakaspalveluhenkinen tiimi',
    'Jatkuva kouluttautuminen'
  ],
  ourCommitment: 'Sitoutumisemme',
  ourCommitmentDesc: 'Olemme sitoutuneet tarjoamaan parasta mahdollista palvelua',
  commitmentPoints: [
    'Laadukas työnjälki',
    'Täsmälliset aikataulut',
    'Joustavat ratkaisut',
    'Asiakastyytyväisyys'
  ],
  serviceAreas: 'Palvelualueemme',
  regions: 'Toiminta-alueemme',
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
  ],
  blogTitle: 'Blogi',
  blogDesc: 'Siivousvinkkejä ja uutisia',
  blogComingSoon: 'Tulossa pian!',
  taxCreditTitle: 'Kotitalousvähennys',
  taxCreditDesc: 'Hyödynnä kotitalousvähennys siivouspalveluissa',
  taxCreditContent: [
    'Voit saada kotitalousvähennystä siivouspalveluista.',
    'Vähennys on 40% työkorvauksesta.',
    'Maksimivähennys on 2250€ vuodessa.',
    'Omavastuu on 100€ vuodessa.'
  ],
  taxCreditExtra: 'Autamme mielellämme kotitalousvähennyksen hakemisessa.',
  contactTitle: 'Ota yhteyttä',
  contactDesc: 'Pyydä tarjous tai kysy lisätietoja',
  formName: 'Nimi',
  formEmail: 'Sähköposti',
  formPhone: 'Puhelinnumero',
  formMessage: 'Viesti',
  formSubmit: 'Lähetä',
  formSuccess: 'Kiitos viestistäsi! Otamme sinuun yhteyttä pian.',
  formError: 'Viestin lähetys epäonnistui. Yritä uudelleen.'
};

export default translations;
