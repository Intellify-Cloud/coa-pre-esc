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

export type TemperatureCity = {
  name: string
  temperature: string
  featured?: boolean
}

export type LongStayFaqItem = {
  question: string
  answer: string
}

export type LongStayData = {
  eyebrow: string
  title: string
  lead: string
  highlight: string
  image: string
  imageAlt: string
  primaryCta: Cta
  secondaryCta: Cta
  facts: readonly string[]
  temperatureComparison: readonly TemperatureCity[]
  winterContrast: {
    title: string
    body: string
  }
  accommodation: {
    title: string
    body: string
    images: readonly ResortImage[]
    features: readonly string[]
  }
  experience: {
    title: string
    body: string
    image: ResortImage
    items: readonly string[]
  }
  golf: {
    title: string
    body: string
    note: string
    images: readonly ResortImage[]
    courses: readonly {
      name: string
      rating: string
      category: string
      driveTime: string
      description: string
      image: ResortImage
    }[]
  }
  location: {
    title: string
    body: string
    image: string
  }
  pricing: {
    eyebrow: string
    title: string
    note: string
    rows: readonly {
      duration: string
      price: string
      featured?: boolean
    }[]
  }
  faq: {
    eyebrow: string
    title: string
    items: readonly LongStayFaqItem[]
  }
  enquire: {
    eyebrow: string
    title: string
    body: string
  }
}

export type UspItem = {
  icon: 'families' | 'calendar' | 'wallet' | 'pause' | 'loyalty' | 'shield'
  title: string
  body: string
}

export type LongStayStripItem = {
  title: string
  body: string
}

export const siteText = {
  site: {
    name: 'Coastal Preferred Escapes',
    description:
      'Coastal Preferred Escapes is a flexible beach holiday membership club for South African families, featuring Cabana Mio in Athlone Park, Amanzimtoti.',
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
    'how-it-works',
    'team',
    'founding-family',
    'why-families-join-alt',
    'steps',
    'long-stay-strip',
    'map',
    'footer',
  ],
  'contact-bar': {
    message: 'Your beach. Your family. Your escape.',
    phone: '+27 83 237 0021',
    email: 'jolene@cpe-za.co.za',
  },
  'nav-bar': {
    logoText: 'CPE',
    logoImage: '/logo/cpe-logo-colour-tp.png',
    scrolledLogoImage: '/logo/cpe-logo-bw-tp.png',
    links: [
      { label: 'Home', href: '/#hero' },
      { label: 'Membership', href: '/#membership' },
      { label: 'Cabana Mio', href: '/cabana-mio/' },
      { label: 'Long Stay', href: '/long-stay/' },
      { label: 'About CPE', href: '/about/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Contact', href: '/contact/' },
    ],
    cta: { label: 'Contact Us', href: '/contact/' },
  },
  hero: {
    eyebrow: '',
    vision: 'Because every family deserves a beach holiday.',
    title: 'Your beach holiday.',
    titleAccent: 'Every year.',
    body: 'Plan flexible family beach holidays at Cabana Mio in Athlone Park, Amanzimtoti. Build holiday value through manageable monthly contributions, request available dates within your season, and keep annual beach time within reach.',
    image: '/optimized/hero-home.webp',
    primaryCta: { label: 'Explore Memberships', href: '#membership' },
    secondaryCta: { label: 'Discover Cabana Mio', href: '/cabana-mio/' },
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
        body: 'Request available dates within your season',
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
        body: 'Longer membership is recognised over time',
      },
      {
        icon: 'shield',
        title: 'No Lifetime Obligation',
        body: 'A modern alternative to traditional timeshare',
      },
    ] satisfies UspItem[],
  },
  'how-it-works': {
    eyebrow: '- How It Works -',
    title: 'A clearer way to plan your Cabana Mio holidays.',
    body:
      'Coastal Preferred Escapes is designed as a flexible holiday membership, not a traditional lifetime timeshare week. Your membership helps your family build holiday value and request available Cabana Mio dates that fit your season and plans.',
    items: [
      {
        title: 'Choose a membership',
        body:
          'Start with the Coastal Escape or Coastal Preferred Escape option that matches your family budget and usual travel season.',
      },
      {
        title: 'Select available dates',
        body:
          'Request Cabana Mio weeks within your membership season, subject to availability and the booking rules for that period.',
      },
      {
        title: 'Build holiday value',
        body:
          'Your contributions build usable holiday value over time, helping you plan beach breaks without annual interest charges.',
      },
    ],
  },
  about: {
    eyebrow: 'Why Families Join',
    title: 'Beach holidays that are easier to plan and easier to keep.',
    body: 'Coastal Preferred Escapes helps South African families make annual beach time more predictable through a flexible membership model built around Cabana Mio in Athlone Park, Amanzimtoti and future partner resorts.',
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
    body: 'Coastal Preferred Escapes helps South African families make annual beach time more predictable through a flexible membership model built around Cabana Mio in Athlone Park, Amanzimtoti and future partner resorts.',
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
    eyebrow: '- Holiday Wallet -',
    title: 'How your holiday value builds over time.',
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
    footer: {
      body: 'Built around family rhythm, not rigid holiday pressure.',
      cta: { label: 'Contact Us', href: '/contact/' },
    },
    members: [
      {
        name: 'Coastal Escape',
        joiningFee: membershipPricing.starter.joiningFee,
        monthlyContribution: membershipPricing.starter.monthlyContribution,
        bio: 'Entry membership package for families who want reliable annual beach holiday value.',
        tier: 'starter',
        benefits: [],
      },
      {
        name: 'Coastal Preferred Escape',
        joiningFee: membershipPricing.preferred.joiningFee,
        monthlyContribution: membershipPricing.preferred.monthlyContribution,
        bio: 'Preferred membership package with stronger monthly holiday value and added flexibility.',
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
  'long-stay-strip': {
    eyebrow: '- Long Stay -',
    title: 'Winter Sun, Made Easy',
    body: 'Settle into Amanzimtoti for a 60-90 day coastal escape.',
    cta: { label: 'View Long Stay', href: '/long-stay/' },
    items: [
      {
        title: '60-90 days',
        body: 'Built for guests escaping the European winter.',
      },
      {
        title: '3-bedroom duplexes',
        body: 'Self-catering beachside space at Cabana Mio.',
      },
      {
        title: 'Golf-rich coast',
        body: 'Top KZN courses within easy driving distance.',
      },
    ] satisfies LongStayStripItem[],
  },
  map: {
    eyebrow: '- Our Flagship Resort -',
    title: 'Cabana Mio, Athlone Park, Amanzimtoti.',
    body: 'Self-catering duplex chalets in Athlone Park, Amanzimtoti, designed for easy family holidays on the KwaZulu-Natal South Coast. Expect warm-water beach days, practical chalet comforts, and space for the family to settle in.',
    address: '159 Beach Road, Athlone Park, Amanzimtoti, KwaZulu-Natal',
    embedUrl: '',
    pageCta: { label: 'View Cabana Mio Rates', href: '/cabana-mio/' },
    externalCta: { label: 'Visit Cabana Mio Website', href: 'https://www.cabanamio.co.za' },
    rates: {
      eyebrow: '- Cabana Mio Rates -',
      title: 'Seasonal 6-sleeper accommodation rates.',
      note:
        'Rates are shown per 6-sleeper unit per day. Availability, seasonal rules, and booking terms apply.',
      rows: [
        { season: 'Value', rate: 'R 1 250/day' },
        { season: 'Preferred', rate: 'R 1 500/day' },
        { season: 'Peak 2', rate: 'R 1 800/day' },
        { season: 'Peak 1', rate: 'R 2 500/day' },
      ],
    },
    logo: '/cabana-mio/optimized/Copy-of-Cabana-Mio-Logo-nbg.webp',
    primaryImage: {
      src: '/cabana-mio/optimized/drone-to-ocean-hero.webp',
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
        src: '/cabana-mio/optimized/drone-casa-ocean.webp',
        alt: 'Aerial view of Cabana Mio chalets and the ocean',
        label: 'Chalets To Ocean',
      },
      {
        src: '/cabana-mio/optimized/drone-from-ocean.webp',
        alt: 'Aerial view from the ocean toward Cabana Mio',
        label: 'From The Ocean',
      },
      {
        src: '/cabana-mio/optimized/drone-ocean-2.webp',
        alt: 'Drone view of the coastline near Cabana Mio',
        label: 'South Coast Setting',
      },
      {
        src: '/cabana-mio/optimized/drone-to-ocean-hero.webp',
        alt: 'Aerial view from Cabana Mio toward the beach and ocean',
        label: 'Beach Path',
      },
      {
        src: '/cabana-mio/beach-ocean.png',
        alt: 'Indian Ocean beach near Cabana Mio in Amanzimtoti',
        label: 'Indian Ocean Beach',
      },
      {
        src: '/cabana-mio/beach-walk.jpeg',
        alt: 'Shaded beach path near Cabana Mio in Amanzimtoti',
        label: 'Beach Walk',
      },
      {
        src: '/cabana-mio/optimized/kirchen.webp',
        alt: 'Cabana Mio indoor dining area and equipped kitchen',
        label: 'Equipped Kitchen',
      },
      {
        src: '/cabana-mio/optimized/room-living.webp',
        alt: 'Cabana Mio living room seating area',
        label: 'Living Room',
      },
      {
        src: '/cabana-mio/optimized/rooms-double.webp',
        alt: 'Cabana Mio main bedroom with double bed',
        label: 'Main Bedroom',
      },
      {
        src: '/cabana-mio/optimized/rooms-double-2.webp',
        alt: 'Cabana Mio double bedroom with natural light',
        label: 'Double Bedroom',
      },
      {
        src: '/cabana-mio/optimized/rooms-double-3.webp',
        alt: 'Cabana Mio double bedroom detail',
        label: 'Bedroom Detail',
      },
      {
        src: '/cabana-mio/optimized/rooms-twin.webp',
        alt: 'Cabana Mio extra bedroom with twin beds',
        label: 'Twin Bedrooms',
      },
      {
        src: '/cabana-mio/optimized/rooms-twin-2.webp',
        alt: 'Cabana Mio twin bedroom with two beds',
        label: 'Twin Room',
      },
      {
        src: '/cabana-mio/optimized/rooms-twin-3.webp',
        alt: 'Cabana Mio twin bedroom detail',
        label: 'Twin Room Detail',
      },
    ] satisfies ResortImage[],
  },
  'long-stay': {
    eyebrow: '',
    title: 'Trade Winter for the Indian Ocean',
    lead:
      'Escape the European winter and make the South African coast your home for 60-90 days.',
    highlight: '3-bedroom beachside duplexes in Amanzimtoti, South Africa',
    image: '/hero/hero_3.png',
    imageAlt: 'Sunny coastal beach scene for the Cabana Mio long-stay winter escape',
    primaryCta: { label: 'Explore the Winter Escape', href: '#accommodation' },
    secondaryCta: { label: 'View 90-Day Pricing', href: '#pricing' },
    facts: ['50m from the beach', '3 bedrooms', 'Unlimited Wi-Fi', 'Golf nearby'],
    winterContrast: {
      title: 'While Europe is in winter, South Africa is in summer.',
      body:
        'Plan your longer stay around warm coastal days, Indian Ocean air, and a gentler winter rhythm. Temperatures shown are approximate seasonal averages.',
    },
    temperatureComparison: [
      { name: 'London', temperature: 'Approx. 7°C' },
      { name: 'Amsterdam', temperature: 'Approx. 6°C' },
      { name: 'Stockholm', temperature: 'Approx. 0°C' },
      { name: 'Amanzimtoti', temperature: 'Approx. 25°C', featured: true },
    ],
    accommodation: {
      title: 'More than a holiday apartment. A home for the season.',
      body:
        'Cabana Mio offers spacious 3-bedroom duplex accommodation for guests who want to settle in for longer than a short break. Cook at home, relax in your own living space, and enjoy room for visiting family within the unit\'s normal occupancy limits.',
      images: [
        {
          src: '/cabana-mio/optimized/room-living.webp',
          alt: 'Cabana Mio living room with seating and television',
          label: 'Living Area',
        },
        {
          src: '/cabana-mio/optimized/kirchen.webp',
          alt: 'Cabana Mio self-catering kitchen with stove and sink',
          label: 'Kitchen',
        },
        {
          src: '/cabana-mio/optimized/rooms-double.webp',
          alt: 'Cabana Mio main bedroom with double bed and patio doors',
          label: 'Main Bedroom',
        },
        {
          src: '/cabana-mio/optimized/rooms-twin-3.webp',
          alt: 'Cabana Mio twin bedroom with two single beds',
          label: 'Twin Bedroom',
        },
      ],
      features: [
        '3 bedrooms',
        'Full kitchen',
        'Living area',
        'Unlimited Wi-Fi',
        'Walking distance to the beach',
        'Space for visiting family',
      ],
    },
    experience: {
      title: 'Stay long enough to actually live here.',
      body:
        'A longer stay gives you time to find a rhythm: morning walks toward the beach, relaxed breakfasts at home, shopping locally, quiet afternoons, and enough space to welcome family for part of the trip.',
      image: {
        src: '/cabana-mio/beach-walk.jpeg',
        alt: 'Shaded beach path near Cabana Mio in Amanzimtoti',
        label: 'Beach Walk',
      },
      items: [
        'Morning beach walks',
        'Relaxed breakfasts at home',
        'Weekday golf or coastal exploring',
        'Local shopping and restaurants',
        'Room for family to visit',
        'A slower South African summer rhythm',
      ],
    },
    golf: {
      title: 'Bring your clubs.',
      body:
        'Amanzimtoti and the KwaZulu-Natal South Coast make a relaxed base for golfers who want warm-weather rounds during a longer winter escape.',
      note:
        'Explore coastal, parkland, estate and resort courses during your stay. Exact travel times and green fees should be confirmed before booking.',
      images: [
        {
          src: '/cabana-mio/optimized/drone-from-ocean.webp',
          alt: 'Aerial view from the ocean toward Cabana Mio and the coastline',
          label: 'Coastal Setting',
        },
      ],
      courses: [
        {
          name: 'Amanzimtoti Country Club',
          rating: '4.1',
          category: 'Closest Local Course',
          driveTime: '+-10 min drive',
          description:
            'The closest and most affordable option, with a flat 18-hole coastal parkland layout, nature conservancy setting and a demanding 16th-hole river carry.',
          image: {
            src: '/golf/Amanzimtoti-Golf-Club-Drone.jpg',
            alt: 'Amanzimtoti Country Club golf course viewed from above',
            label: 'Amanzimtoti Country Club',
          },
        },
        {
          name: 'Selborne Golf Club',
          rating: '4.5',
          category: 'Elite Coastal & Resort Course',
          driveTime: '33 min / 49.9 km south via the N2',
          description:
            'Often described as one of the South Coast classics, with estate-style surroundings, rolling hills and a polished resort feel.',
          image: {
            src: '/golf/selbourne.webp',
            alt: 'Selborne Golf Club course with green fairways and trees',
            label: 'Selborne',
          },
        },
        {
          name: 'San Lameer Estate',
          rating: '4.7',
          category: 'Elite Coastal & Resort Course',
          driveTime: '1 hr 13 min / 120 km south via the N2 toll road',
          description:
            'A premier South Coast estate course known for manicured surfaces, coastal vegetation and a refined holiday setting.',
          image: {
            src: '/golf/san-lameer.jpg',
            alt: 'San Lameer Estate golf course with palms, fairways and water features',
            label: 'San Lameer',
          },
        },
        {
          name: 'Umdoni Park Golf Club',
          rating: '4.5',
          category: 'Elite Coastal & Resort Course',
          driveTime: '36 min / 46.7 km south via the N2',
          description:
            'A nature-rich coastal layout associated with sea views, mature trees and a memorable South Coast setting.',
          image: {
            src: '/golf/umdoni.jpg',
            alt: 'Umdoni Park Golf Club fairway overlooking the Indian Ocean',
            label: 'Umdoni Park',
          },
        },
        {
          name: 'Wild Coast Sun Country Club',
          rating: '4.5',
          category: 'Elite Coastal & Resort Course',
          driveTime: '1 hr 32 min / 141 km south via the N2 and R61 toll road',
          description:
            'A dramatic championship-style course known for rugged terrain, river ravines and an ocean-facing landscape.',
          image: {
            src: '/golf/wild-coast.jpg',
            alt: 'Wild Coast Sun Country Club green and bunkers at sunset',
            label: 'Wild Coast Sun',
          },
        },
        {
          name: 'Umkomaas Golf Club',
          rating: '4.3',
          category: 'Highly-Rated Local & Regional Course',
          driveTime: '19 min / 24.2 km south via the N2',
          description:
            'A friendly local coastal course with a relaxed atmosphere and wide South Coast appeal.',
          image: {
            src: '/golf/umkomaas_golf_club.jpg',
            alt: 'Umkomaas Golf Club fairway with coastal trees and sea views',
            label: 'Umkomaas',
          },
        },
        {
          name: 'Cotswold Downs',
          rating: '4.7',
          category: 'Golf Estate',
          driveTime: '49 min / 51.2 km inland northwest via the N2, M7 and M13',
          description:
            'An inland rolling-hills estate course known for immaculate conditions and fast greens.',
          image: {
            src: '/golf/cotswold-downs.jpg',
            alt: 'Cotswold Downs golf course with rolling fairways and estate scenery',
            label: 'Cotswold Downs',
          },
        },
        {
          name: "Prince's Grant",
          rating: '4.5',
          category: 'Golf Estate',
          driveTime: '1 hr 17 min / 105 km north via the N2 toll road',
          description:
            'A coastal links-style estate with private beach access and striking ocean views.',
          image: {
            src: '/golf/princes-grant.jpg',
            alt: 'Prince\'s Grant golf course with coastal links-style fairways',
            label: "Prince's Grant",
          },
        },
        {
          name: 'Durban Country Club',
          rating: '4.4',
          category: 'Golf Estate',
          driveTime: '27 min / 31.5 km north via the N2 and M4',
          description:
            'A historic championship layout shaped by coastal sand dunes and world-class pedigree.',
          image: {
            src: '/golf/durban-country-club.jpg',
            alt: 'Durban Country Club golf course with coastal championship layout',
            label: 'Durban Country Club',
          },
        },
      ],
    },
    location: {
      title: 'Amanzimtoti, South Africa',
      body:
        'Amanzimtoti sits on KwaZulu-Natal\'s South Coast, roughly 30-40 minutes south of Durban. Expect warm-water beaches, relaxed coastal village vibes, and easy access to shops and restaurants. The Indian Ocean climate means sunny winter days and summer warmth while Europe freezes.',
      image: '/cabana-mio/optimized/drone-casa-ocean.webp',
    },
    pricing: {
      eyebrow: '- Pricing -',
      title: 'Winter Sun Packages packages',
      note: 'Long-stay rates are per 3-bedroom duplex for the duration selected. Availability and booking terms apply.',
      rows: [
        { duration: '60 days', price: 'Around €5,300 / £4,550', featured: false },
        { duration: '75 days', price: 'Around €6,650 / £5,700', featured: false },
        { duration: '90 days', price: 'Around €7,950 / £6,850', featured: true },
      ],
    },
    faq: {
      eyebrow: '- FAQ -',
      title: 'Common questions about the long-stay escape',
      items: [
        {
          question: 'What is the minimum stay?',
          answer:
            'The long-stay winter escape is designed for 60–90 days. Shorter stays may be possible depending on availability, but the best value and experience come from the longer durations.',
        },
        {
          question: 'Is the price per person or per unit?',
          answer:
            'The quoted pricing is per 3-bedroom duplex for the full duration. The unit sleeps up to 6 guests, making it cost-effective for couples or small families.',
        },
        {
          question: 'Are flights and transfers included?',
          answer:
            'No. Flights are not included. We can provide airport transfer assistance and guidance to help make your journey smooth, but you will need to book international travel separately.',
        },
        {
          question: 'What is the Wi-Fi situation?',
          answer:
            'Unlimited Wi-Fi is included at no extra cost, so you can stay in touch with family back home, stream, or work remotely if needed.',
        },
        {
          question: 'Can I visit golf courses nearby?',
          answer:
            'Yes. Amanzimtoti and the surrounding South Coast have several golf courses. Exact distances vary, but golf is very much part of the local lifestyle.',
        },
      ],
    },
    enquire: {
      eyebrow: '- Enquire -',
      title: 'Check availability for your winter escape',
      body:
        'Ready to trade winter for the Indian Ocean? Reach out and we will walk you through availability, dates, and how to secure your 60–90 day stay.',
    },
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
          'Many years of happy holidays at Cabana Mio, supported by practical family accommodation in Athlone Park, Amanzimtoti.',
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
    eyebrow: '- Founding Member Offer -',
    title: 'Founding Member Offer - Limited to 50 Members',
    body:
      'Join before 28 February 2027 and receive one complimentary 3-night Cabana Mio stay while your family starts building long-term holiday value.',
    deadline: '28 February 2027',
    bonusStay: {
      nights: 3,
      weeks2026: 'Valid during Value and Preferred periods',
      weeks2027: 'Subject to availability',
      excludedWeeks: 'Excludes Weeks 50-53 and Weeks 1-2',
    },
    offerTerms: [
      'Limited to 50 Founding Members',
      'Join before 28 February 2027',
      'One complimentary 3-night stay',
      'Valid during Value and Preferred periods',
      'Subject to availability',
      'Excludes Weeks 50-53 and Weeks 1-2',
    ],
    inclusions: [
      'Spacious 3-bedroom Cabana Mio duplex accommodation',
      'Athlone Park, Amanzimtoti location',
      'Free unlimited Wi-Fi',
      'Sleeps up to 6 guests',
    ],
    cta: { label: 'Contact Us', href: '/contact/' },
  },
  contact: {
    eyebrow: '- Contact Us -',
    title: 'Request Information',
    body: 'Have a question, want to find out more, or ready to start planning your next family beach holiday? Reach out to us and we will gladly walk you through Coastal Preferred Escapes, the available membership options, and what the journey could look like for your family.\n\nWhether you are exploring the idea for the first time or ready to take the next step, we are here to help you start the conversation in a friendly, personal way.',
    banking: {
      title: 'Banking Details',
      note:
        'Payments are made to the Cabana Mio accommodation management account used for CPE holiday bookings. Please use your full name as the payment reference.',
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
    submit: 'Contact Us',
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
    trust: {
      company: 'CPE Properties (Pty) Ltd',
      registration: 'Reg. No. 2022/673992/07',
      area: 'Athlone Park, Amanzimtoti, KwaZulu-Natal',
      note:
        'Cabana Mio consists of a mixed owner and holiday-use complex, with accommodation managed through Coastal Preferred Escapes.',
    },
    columns: [
      {
        title: 'Quick Links',
        links: [
          { label: 'Membership', href: '/#membership' },
          { label: 'Cabana Mio', href: '/cabana-mio/' },
          { label: 'Long Stay', href: '/long-stay/' },
          { label: 'About CPE', href: '/about/' },
          { label: 'FAQ', href: '/faq/' },
        ],
      },
    ],
    legalLinks: [{ label: 'Privacy', href: '/privacy-policy/' }],
  },
  'long-stay-nav': {
    logoText: 'Coastal Preferred Escapes',
    logoImage: '/logo/cpe-logo-colour-tp.png',
    scrolledLogoImage: '/logo/cpe-logo-bw-tp.png',
    links: [
      { label: 'Home', href: '/#hero' },
      { label: 'Long Stay', href: '/long-stay/' },
      { label: 'The Escape', href: '/long-stay/#escape' },
      { label: 'Accommodation', href: '/long-stay/#accommodation' },
      { label: 'Golf', href: '/long-stay/#golf' },
      { label: 'Pricing', href: '/long-stay/#pricing' },
      { label: 'FAQ', href: '/long-stay/#faq' },
      { label: 'Enquire', href: '/long-stay/#enquire' },
    ],
    cta: { label: 'Check Availability', href: '/long-stay/#enquire' },
  },
} as const

export type SiteText = typeof siteText
export type SectionName = (typeof siteText.sections)[number]
export type SectionData<Name extends keyof SiteText> = SiteText[Name]
