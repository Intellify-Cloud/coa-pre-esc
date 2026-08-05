export type Cta = {
  label: string
  href: string
}

export type NavLink = Cta

export type StepItem = {
  title: string
  body: string
}

export type TeamMember = {
  name: string
  joiningFee: string
  monthlyContribution: string
  bio: string
  tier: 'starter' | 'preferred' | 'future'
  benefits: string[]
}

export type TestimonialItem = {
  quote: string
  name: string
  detail: string
}

const membershipPricing = {
  starter: {
    joiningFee: 'R 2 500',
    monthlyContribution: 'R 750',
  },
  preferred: {
    joiningFee: 'R 3 500',
    monthlyContribution: 'R 1 050',
  },
  future: {
    joiningFee: 'Future Phase',
    monthlyContribution: 'Future Phase',
  },
} as const

export type FooterColumn = {
  title: string
  links: NavLink[]
}

export type FoundingFamilyOffer = {
  eyebrow: string
  title: string
  body: string
  deadline: string
  bonusStay: {
    nights: number
    weeks2026: string
    weeks2027: string
    excludedWeeks: string
  }
  inclusions: string[]
  cta: Cta
}

export type FeatureGroup = {
  title: string
  items: string[]
}

export type ResortImage = {
  src: string
  alt: string
  label: string
  featured?: boolean
}

export type UspItem = {
  icon: 'families' | 'calendar' | 'wallet' | 'pause' | 'loyalty' | 'shield'
  title: string
  body: string
}

export const siteText = {
  site: {
    name: 'Coastal Preferred Escapes',
    description:
      'Coastal Preferred Escapes is a flexible beach holiday membership club for South African families, featuring Cabana Mio in Amanzimtoti.',
    url: 'https://coastalpreferredescapes.co.za',
    locale: 'en_ZA',
    ogImage: '/og-image.jpg',
  },
  theme: {
    colorScheme: 'light',
    futureDarkModeClass: 'theme-dark',
  },
  sections: [
    'nav-bar',
    'hero',
    'usp',
    'team',
    'founding-family',
    'why-families-join-alt',
    'steps',
    'map',
    'footer',
  ],
  'contact-bar': {
    message: 'Your beach. Your family. Your escape.',
    phone: '+27 83 237 0021',
    email: 'jolene@sca-za.com',
  },
  'nav-bar': {
    logoText: 'CPE',
    logoImage: '/logo/cpe-logo-colour-tp.png',
    scrolledLogoImage: '/logo/cpe-logo-bw-tp.png',
    links: [
      { label: 'Home', href: '/#hero' },
      { label: 'Membership', href: '/#membership' },
      { label: 'Resorts', href: '/#cabana-mio' },
      { label: 'About CPE', href: '/about/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Contact', href: '/contact' },
  },
  hero: {
    eyebrow: '',
    vision: 'Because every family deserves a beach holiday.',
    title: 'Your beach holiday.',
    titleAccent: 'Every year.',
    body: 'Experience affordable, flexible holidays at Cabana Mio. Enjoy interest-free monthly payments, flexible booking, the ability to pause when needed, and exclusive loyalty rewards.',
    image: '/hero/hero.png',
    primaryCta: { label: 'Explore Memberships', href: '#membership' },
    secondaryCta: { label: 'Discover Cabana Mio', href: '#cabana-mio' },
    facts: [
      'Interest-free monthly payments',
      'Flexible booking within your season',
      'Pause when life gets in the way',
      'Loyalty rewards for Founding Families',
    ],
  },
  usp: {
    items: [
      {
        icon: 'families',
        title: 'For Families',
        body: 'Holidays that bring you closer',
      },
      {
        icon: 'calendar',
        title: 'Flexible',
        body: 'You choose when you go',
      },
      {
        icon: 'wallet',
        title: 'Affordable',
        body: `Build your holiday from just ${membershipPricing.starter.monthlyContribution} pm`,
      },
      {
        icon: 'pause',
        title: 'Life Happens',
        body: 'Pause your membership when needed',
      },
      {
        icon: 'loyalty',
        title: 'Loyalty Matters',
        body: 'Longer membership, greater benefits',
      },
      {
        icon: 'shield',
        title: 'No Lifetime Obligation',
        body: 'A modern alternative to traditional timeshare',
      },
    ] satisfies UspItem[],
  },
  about: {
    eyebrow: 'Why Families Join',
    title: 'Beach holidays that are easier to plan and easier to keep.',
    body: 'Coastal Preferred Escapes helps South African families protect annual beach time with a flexible membership model built around Cabana Mio in Amanzimtoti and future partner resorts.',
    highlights: [
      'For families - holidays that bring you closer',
      'Flexible - choose when you go within your season',
      'Affordable - build your holiday from monthly payments',
      'Life happens - pause your membership when needed',
      'Loyalty matters - longer membership, greater benefits',
    ],
    promises: [
      'Fair value for money.',
      'Honest pricing with no hidden surprises.',
      'Flexible holiday options wherever possible.',
      'Respect and understanding if temporary financial hardship arises.',
      'Friendly personal service.',
      'Well-maintained accommodation in quality resorts.',
    ],
    principles: [
      'We believe holidays should never become a financial burden.',
      'We believe loyalty deserves to be rewarded.',
      'We believe members should enjoy flexibility, not unnecessary restrictions.',
      'We believe people should be treated fairly and honestly.',
    ],
  },
  'why-families-join-alt': {
    eyebrow: '- Why Families Join -',
    title: 'Beach holidays that are easier to plan and easier to keep.',
    body: 'Coastal Preferred Escapes helps South African families protect annual beach time with a flexible membership model built around Cabana Mio in Amanzimtoti and future partner resorts.',
    items: [
      {
        title: 'Family',
        body: 'Create beach holidays that bring everyone closer, year after year.',
      },
      {
        title: 'Flexible',
        body: 'Choose available dates within your season instead of being locked into one fixed week.',
      },
      {
        title: 'Affordable',
        body: 'Build your holiday value through manageable monthly contributions.',
      },
      {
        title: 'Life Happens',
        body: 'Pause protection helps keep your membership manageable when circumstances change.',
      },
      {
        title: 'Loyalty',
        body: 'Longer membership is recognised with greater benefits over time.',
      },
    ],
  },
  steps: {
    eyebrow: '- How It Works -',
    title: 'Your monthly contribution builds reliable holiday value.',
    items: [
      {
        title: 'Choose Your Season',
        body: 'Pick the membership level that matches when your family is most likely to travel.',
      },
      {
        title: 'Pay Monthly',
        body: 'Interest-free monthly payments help you build usable holiday value throughout the year.',
      },
      {
        title: 'Build Your Wallet',
        body: 'Your contributions sit in a protected Holiday Wallet, with 12, 24, 36, 48, and 60 month contribution options available.',
      },
      {
        title: 'Book Flexibly',
        body: 'Confirm available dates within your season instead of being tied to one rigid fixed week.',
      },
      {
        title: 'Pause When Needed',
        body: 'When life gets in the way, pause protection helps keep your membership manageable.',
      },
    ],
  },
  team: {
    eyebrow: '- Membership -',
    title: 'Choose the membership that fits your family’s beach rhythm',
    included: [
      'Priority annual holiday access',
      'Flexible seasonal booking',
      'Protected membership wallet',
      'Honest pricing',
      'Financial flexibility',
      'Well-maintained accommodation',
    ],
    members: [
      {
        name: 'Coastal Escape',
        joiningFee: membershipPricing.starter.joiningFee,
        monthlyContribution: membershipPricing.starter.monthlyContribution,
        bio: 'Entry membership wallet package for families planning reliable annual beach holiday value.',
        tier: 'starter',
        benefits: [],
      },
      {
        name: 'Coastal Preferred Escape',
        joiningFee: membershipPricing.preferred.joiningFee,
        monthlyContribution: membershipPricing.preferred.monthlyContribution,
        bio: 'Preferred membership wallet package with stronger monthly holiday value.',
        tier: 'preferred',
        benefits: [],
      },
      {
        name: 'Coastal Premier Escape',
        joiningFee: membershipPricing.future.joiningFee,
        monthlyContribution: membershipPricing.future.monthlyContribution,
        bio: 'Future premium membership wallet package for later release.',
        tier: 'future',
        benefits: [],
      },
    ],
  },
  map: {
    eyebrow: '- Our Flagship Resort -',
    title: 'Cabana Mio, Amanzimtoti.',
    body: 'Self-catering chalets a few metres from Amanzimtoti Beach, designed for easy family holidays on the KwaZulu-Natal South Coast. Expect the sound of the waves, warm-water beach days, and practical chalet comforts.',
    address: '159 Beach Road, Athlone Park, Amanzimtoti, KwaZulu-Natal',
    embedUrl: '',
    logo: '/cabana-mio/Copy-of-Cabana-Mio-Logo-nbg.png',
    primaryImage: {
      src: '/cabana-mio/drone-to-ocean-hero.png',
      alt: 'Aerial view from Cabana Mio toward the ocean',
      label: 'Rooftops To Ocean',
      featured: true,
    } satisfies ResortImage,
    featureGroups: [
      {
        title: 'Features',
        items: [
          '+ 7 self-catering chalets',
          '+ 50 meters from the beach',
          '+ Secure parking',
          '+ Free Wi-Fi',
        ],
      },
      {
        title: 'Bedrooms',
        items: [
          '+ Sleeps up to 6 guests',
          '+ Main bedroom with patio access',
          '+ Two extra twin bedrooms',
        ],
      },
      {
        title: 'Living and Dining',
        items: [
          '+ Private patio and braai area',
          '+ Fully equipped kitchen',
        ],
      },
      {
        title: 'Convenience',
        items: [
          '+ 50 meters from the beach',
          '+ Daily housekeeping',
          '+ Close to shops and restaurants',
          '+ Lifesaver beaches',
        ],
      },
    ],
    images: [
      {
        src: '/cabana-mio/drone-casa-ocean.png',
        alt: 'Aerial view of Cabana Mio chalets and the ocean',
        label: 'Chalets To Ocean',
      },
      {
        src: '/cabana-mio/drone-from-ocean.png',
        alt: 'Aerial view from the ocean toward Cabana Mio',
        label: 'From The Ocean',
      },
      {
        src: '/cabana-mio/drone-ocean-2.png',
        alt: 'Drone view of the coastline near Cabana Mio',
        label: 'South Coast Setting',
      },
      {
        src: '/cabana-mio/drone-to-ocean-hero.png',
        alt: 'Aerial view from Cabana Mio toward the beach and ocean',
        label: 'Beach Path',
      },
      {
        src: '/cabana-mio/drone-to-ocean-hero - Copy.png',
        alt: 'Alternate aerial view from Cabana Mio toward the ocean',
        label: 'Rooftop Ocean Route',
      },
      {
        src: '/cabana-mio/ocean.png',
        alt: 'Ocean view near Cabana Mio',
        label: 'Ocean View',
      },
      {
        src: '/cabana-mio/beach-fig-tree.png',
        alt: 'Fig tree near the beach access at Cabana Mio',
        label: 'Beach Fig Tree',
      },
      {
        src: '/cabana-mio/beach-forest-path.png',
        alt: 'Shaded path toward the beach near Cabana Mio',
        label: 'Beach Forest Path',
      },
      {
        src: '/cabana-mio/beach-forest-rd.png',
        alt: 'Tree-lined beach road near Cabana Mio',
        label: 'Beach Forest Road',
      },
      {
        src: '/cabana-mio/beach-ocean.png',
        alt: 'Amanzimtoti beach and ocean near Cabana Mio',
        label: 'Beach Ocean',
      },
      {
        src: '/cabana-mio/beach-shell.jpg',
        alt: 'Shell detail on the beach near Cabana Mio',
        label: 'Beach Shell',
      },
      {
        src: '/cabana-mio/dining-out.jpg',
        alt: 'Cabana Mio outdoor dining and patio area',
        label: 'Private Patio',
      },
      {
        src: '/cabana-mio/dining-in.jpg',
        alt: 'Cabana Mio indoor dining area and equipped kitchen',
        label: 'Equipped Kitchen',
      },
      {
        src: '/cabana-mio/rooms-double.jpg',
        alt: 'Cabana Mio main bedroom with double bed',
        label: 'Main Bedroom',
      },
      {
        src: '/cabana-mio/rooms-twin.jpg',
        alt: 'Cabana Mio extra bedroom with twin beds',
        label: 'Twin Bedrooms',
      },
    ] satisfies ResortImage[],
  },
  testimonials: {
    eyebrow: '- Families And Facts -',
    title: 'A holiday rhythm families can count on.',
    items: [
      {
        quote:
          'CPE gives us peace of mind. We know our beach holiday is sorted every year, and the kids look forward to it all year long.',
        name: 'The Meyer Family',
        detail: 'CPE Members',
      },
      {
        quote:
          'Many years of happy holidays at Cabana Mio, supported by practical family accommodation near Amanzimtoti Beach.',
        name: '30+ Years',
        detail: 'Happy holidays',
      },
      {
        quote:
          '260 weeks of quality accommodation create a growing base for flexible family holiday planning.',
        name: '260 Weeks',
        detail: 'Quality accommodation',
      },
    ],
  },
  'founding-family': {
    eyebrow: '- Founding Family -',
    title: 'Become a Founding Family',
    body: "Limited Founding Family memberships are available. Join today and secure your family's annual beach holiday.",
    deadline: '28 February 2027',
    bonusStay: {
      nights: 3,
      weeks2026: 'Selected 2026 weeks',
      weeks2027: 'Selected 2027 weeks',
      excludedWeeks: 'Peak holiday weeks excluded',
    },
    inclusions: [
      'Free unlimited Wi-Fi',
      'Priority access to future CPE promotions and upgrades',
      'Spacious 3-bedroom duplex chalet',
      'Sleeps up to 6 guests',
    ],
    cta: { label: 'Join the Waiting List', href: '/contact' },
  },
  contact: {
    eyebrow: '- Contact Us -',
    title: 'Request Information',
    body: 'Have a question, want to find out more, or ready to start planning your next family beach holiday? Reach out to us and we will gladly walk you through Coastal Preferred Escapes, the available membership options, and what the journey could look like for your family.\n\nWhether you are exploring the idea for the first time or ready to take the next step, we are here to help you start the conversation in a friendly, personal way.',
    banking: {
      title: 'Banking Details',
      note: 'Please use your full name as the payment reference.',
      details: [
        {
          label: 'Account name',
          value: 'Cabana Mio Accommodation Management Company (Pty) Ltd',
        },
        { label: 'Bank', value: 'Absa' },
        { label: 'Account number', value: '4106 192 496' },
        { label: 'Account type', value: 'Current' },
        { label: 'Branch code', value: '632005' },
        { label: 'Reference', value: 'Your full name' },
      ],
    },
    fields: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Mobile number',
      whatsapp: 'Please contact me via WhatsApp',
      message: 'Travel dates, family holiday needs, or questions',
    },
    submit: 'Join the Waiting List',
    sending: 'Sending your enquiry...',
    success: 'Thank you. Your enquiry has been received and the team will be in touch.',
    error: 'Sorry, something went wrong. Please call or email us directly and we will assist you.',
    privacy: 'Your details are used only to respond to your enquiry and share relevant membership information.',
  },
  footer: {
    brand:
      'Coastal Preferred Escapes helps South African families plan affordable annual beach holidays across a growing collection of coastal resorts through a flexible membership model.',
    commitment:
      'Coastal Preferred Escapes is committed to building long-term relationships rather than making one-off sales. We would rather have members who return year after year than customers who purchase once and never come back. Every decision we make will be guided by one simple question: "Is this in the best interests of our members and the long-term success of our resorts?"',
    columns: [
      {
        title: 'Quick Links',
        links: [
          { label: 'Membership', href: '/#membership' },
          { label: 'Cabana Mio', href: '/#cabana-mio' },
          { label: 'About CPE', href: '/about/' },
          { label: 'FAQ', href: '/faq/' },
        ],
      },
    ],
    legalLinks: [{ label: 'Privacy', href: '/privacy-policy/' }],
  },
} as const

export type SiteText = typeof siteText
export type SectionName = (typeof siteText.sections)[number]
export type SectionData<Name extends keyof SiteText> = SiteText[Name]
