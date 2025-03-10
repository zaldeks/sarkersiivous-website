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
  vatFreeContent: string[];
  vatFreeExtra: string;
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

export const fi = {
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
  vatFreeContent: [
    'Yli 80-vuotiaat voivat saada siivouspalvelut ilman arvonlisäveroa.',
    'Palvelu perustuu sosiaalihuoltolakiin.',
    'Arvonlisäveroton hinta edellyttää palvelutarpeen arviointia.',
    'Ota yhteyttä lisätietoja varten.'
  ],
  vatFreeExtra: 'Autamme mielellämme arvonlisäverottoman palvelun hakemisessa.',
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
} satisfies TranslationType;

export const en = {
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    taxCredit: 'Tax Credit',
    vatFree: 'VAT-free Cleaning',
    blog: 'Blog',
    contact: 'Contact'
  },
  footer: {
    company: 'Sarker Cleaning',
    address: 'Helsinki, Finland',
    phone: '+358 45 861 3571',
    email: 'info@sarkersiivous.fi',
    vatNumber: 'Business ID: 3338744-5',
    serviceAreas: ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen']
  },
  aboutTitle: 'About Us',
  aboutDesc: 'Quality and reliable cleaning services in Helsinki',
  ourStory: 'Our Story',
  ourStoryContent: 'Sarker Cleaning is a cleaning company founded in 2023, offering high-quality cleaning services in the Helsinki area. Our company is built on strong expertise and customer-oriented service.',
  ourStoryExtra: 'Our goal is to provide the best possible cleaning service at a competitive price.',
  ourValues: 'Our Values',
  valuesList: [
    {
      title: 'Quality',
      description: 'We always do our work in the best possible way and ensure customer satisfaction.'
    },
    {
      title: 'Reliability',
      description: 'We stick to agreed schedules and always act professionally.'
    },
    {
      title: 'Customer Focus',
      description: 'We listen to our customers\' wishes and tailor our services accordingly.'
    }
  ],
  whyChooseUs: 'Why Choose Us?',
  whyChooseUsList: [
    {
      title: 'Expertise',
      description: 'Our staff is trained and experienced.'
    },
    {
      title: 'Flexibility',
      description: 'We adapt to our customers\' schedules and needs.'
    },
    {
      title: 'Competitive Prices',
      description: 'We offer quality service at a reasonable price.'
    },
    {
      title: 'Environmental Friendly',
      description: 'We use eco-friendly cleaning products and methods.'
    }
  ],
  ourTeam: 'Our Team',
  ourTeamDesc: 'Professional and reliable staff',
  teamQualities: [
    'Trained professionals',
    'Reliable employees',
    'Customer service oriented team',
    'Continuous training'
  ],
  ourCommitment: 'Our Commitment',
  ourCommitmentDesc: 'We are committed to providing the best possible service',
  commitmentPoints: [
    'Quality work',
    'Punctual schedules',
    'Flexible solutions',
    'Customer satisfaction'
  ],
  serviceAreas: 'Service Areas',
  regions: 'Our Regions',
  vatFreeTitle: 'VAT 0% Cleaning Services for Over 80s',
  vatFreeDesc: 'VAT-free cleaning services for seniors',
  vatFreeContent: [
    'People over 80 can receive cleaning services without VAT.',
    'The service is based on the Social Welfare Act.',
    'VAT-free pricing requires a service needs assessment.',
    'Contact us for more information.'
  ],
  vatFreeExtra: 'We are happy to help with applying for VAT-free service.',
  blogTitle: 'Blog',
  blogDesc: 'Cleaning tips and news',
  blogComingSoon: 'Coming soon!',
  taxCreditTitle: 'Household Tax Credit',
  taxCreditDesc: 'Utilize household tax credit for cleaning services',
  taxCreditContent: [
    'You can get tax credit for cleaning services.',
    'The deduction is 40% of the work compensation.',
    'Maximum deduction is €2250 per year.',
    'Deductible is €100 per year.'
  ],
  taxCreditExtra: 'We are happy to help with applying for household tax credit.',
  contactTitle: 'Contact Us',
  contactDesc: 'Request a quote or ask for more information',
  formName: 'Name',
  formEmail: 'Email',
  formPhone: 'Phone',
  formMessage: 'Message',
  formSubmit: 'Send',
  formSuccess: 'Thank you for your message! We will contact you soon.',
  formError: 'Message sending failed. Please try again.'
} satisfies TranslationType;
