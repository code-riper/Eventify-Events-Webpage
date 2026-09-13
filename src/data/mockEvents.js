export const mockEvents = [
  {
    id: 'evt-101',
    title: 'Arijit Singh Live in Concert',
    slug: 'arijit-singh-live-in-concert',
    category: 'music',
    categoryName: 'Music',
    categoryBadge: 'badge-music',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '06:30 PM - 10:30 PM',
    displayDate: 'Sat, Oct 18, 2026',
    day: '18',
    month: 'OCT',
    location: 'Bandra Kurla Complex (BKC), Mumbai',
    venue: 'Jio World Garden',
    address: 'Plot No. RG 1A, G Block, BKC, Bandra East, Mumbai, Maharashtra 400051',
    city: 'Mumbai',
    price: 999,
    rating: 4.9,
    reviewCount: 1420,
    trending: true,
    featured: true,
    popularNearYou: true,
    description: 'Experience an unforgettable musical evening with India\'s most beloved voice, Arijit Singh. Backed by a 40-piece grand symphony orchestra, Arijit will perform his greatest chart-toppers, soulful acoustic renditions, and brand-new releases under the starry Mumbai skyline.',
    highlights: [
      'Over 3.5 hours of non-stop live musical performance',
      'Grand 40-piece live orchestral backing arrangement',
      'World-class sound, intelligent laser arrays & immersive stage visuals',
      'Dedicated food village featuring top Mumbai gourmet eateries',
      'Seamless multi-gate entry with verified QR ticketing'
    ],
    schedule: [
      { time: '04:30 PM', activity: 'Gates Open & Food Village Access' },
      { time: '06:00 PM', activity: 'Opening Act: Indie Instrumental Prelude' },
      { time: '07:00 PM', activity: 'Arijit Singh Takes the Stage (Set 1 - Soulful Melodies)' },
      { time: '08:30 PM', activity: 'Short Intermission' },
      { time: '08:50 PM', activity: 'High-Energy Anthem Hits & Symphony Finale' },
      { time: '10:30 PM', activity: 'Curtain Call & Crowd Farewell' }
    ],
    organizer: {
      id: 'org-1',
      name: 'HyperStage Live Productions',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      bio: 'Premier live entertainment producer hosting mega arena concerts across Southeast Asia and India.',
      eventsCount: 38,
      followersCount: '48.2K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'VIP Platinum Lounge',
        price: 2999,
        description: 'Prime elevated lounge with direct front-row view, fast-track entry, and complimentary beverages.',
        availableCount: 35,
        perks: ['Front-stage elevated viewing deck', 'Fast-track priority entry queue', 'Welcome drink & snack voucher', 'Dedicated luxury washrooms']
      },
      {
        id: 'premium',
        name: 'Premium Fan Pit',
        price: 1999,
        description: 'Standing zone directly in front of the main stage with incredible sound and energy.',
        availableCount: 120,
        perks: ['Direct proximity to artist stage', 'Dedicated beverage bar lanes', 'Exclusive concert souvenir wristband']
      },
      {
        id: 'general',
        name: 'General Admission',
        price: 999,
        description: 'Open lawn seating/standing with great view of towering LED video walls and concert audio.',
        availableCount: 450,
        perks: ['Access to main festival grounds', 'Food & beverage village access', 'Digital ticket pass with QR']
      }
    ]
  },
  {
    id: 'evt-102',
    title: 'TechSummit India 2026: AI & Next Frontier',
    slug: 'techsummit-india-2026',
    category: 'technology',
    categoryName: 'Technology',
    categoryBadge: 'badge-tech',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&auto=format&fit=crop&q=80',
    date: '2026-11-05',
    time: '09:00 AM - 06:00 PM',
    displayDate: 'Wed, Nov 05, 2026',
    day: '05',
    month: 'NOV',
    location: 'Whitefield, Bengaluru',
    venue: 'KTPO Trade Centre',
    address: 'Plot No. 25, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066',
    city: 'Bangalore',
    price: 1499,
    rating: 4.8,
    reviewCount: 980,
    trending: true,
    featured: false,
    popularNearYou: true,
    description: 'Asia’s premier conference dedicated to Generative AI, Robotics, Autonomous Agents, and Enterprise Cloud Infrastructure. Connect with 5,000+ tech leaders, startup founders, developers, and global venture capitalists.',
    highlights: [
      'Keynotes by Silicon Valley & Indian AI innovators',
      '4 parallel technical tracks: LLMs, Agents, Cloud, and Venture',
      'Hands-on AI Code Labs and developer hack exhibits',
      'Curated founder-investor speed pitching lounges',
      'Buffet networking luncheon and evening after-party'
    ],
    schedule: [
      { time: '08:30 AM', activity: 'Badge Collection & Morning Coffee' },
      { time: '09:30 AM', activity: 'Keynote: The Age of Autonomous Software' },
      { time: '11:00 AM', activity: 'Track Sessions: LLM Fine-tuning at Scale' },
      { time: '01:00 PM', activity: 'Networking Buffet Lunch' },
      { time: '02:30 PM', activity: 'Panel: Venture Capital in Frontier AI' },
      { time: '05:00 PM', activity: 'TechSummit Startup Awards & Mixer' }
    ],
    organizer: {
      id: 'org-2',
      name: 'TechForward Foundation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      bio: 'Non-profit tech think-tank empowering builders across India with flagship developer summits.',
      eventsCount: 22,
      followersCount: '64.5K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'All-Access VIP Delegate',
        price: 3499,
        description: 'Includes investor lounge access, speaker meet-and-greet, and private networking dinner.',
        availableCount: 40,
        perks: ['VIP lounge with all-day espresso bar', 'Exclusive speaker dinner invitation', 'Full conference video recordings', 'Priority keynote front row']
      },
      {
        id: 'premium',
        name: 'Conference + Workshop Pass',
        price: 2199,
        description: 'Full day access to all 4 tracks, AI code labs, and lunch buffet.',
        availableCount: 150,
        perks: ['Access to all keynote & technical tracks', 'Hands-on AI workshop entry', 'Official TechSummit delegate kit', 'Hot buffet lunch']
      },
      {
        id: 'general',
        name: 'General Explorer Pass',
        price: 1499,
        description: 'Standard access to keynote stages and startup exhibition hall.',
        availableCount: 300,
        perks: ['Keynote stage access', 'Startup expo booth tours', 'Digital certificate of participation']
      }
    ]
  },
  {
    id: 'evt-103',
    title: 'Mumbai Midnight Half Marathon 2026',
    slug: 'mumbai-midnight-half-marathon',
    category: 'sports',
    categoryName: 'Sports & Fitness',
    categoryBadge: 'badge-sports',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1600&auto=format&fit=crop&q=80',
    date: '2026-11-21',
    time: '11:00 PM - 04:30 AM',
    displayDate: 'Sat, Nov 21, 2026',
    day: '21',
    month: 'NOV',
    location: 'Marine Drive Promenade, Mumbai',
    venue: 'Nariman Point Starting Line',
    address: 'Netaji Subhash Chandra Bose Road, Churchgate, Mumbai, Maharashtra 400021',
    city: 'Mumbai',
    price: 799,
    rating: 4.7,
    reviewCount: 840,
    trending: true,
    featured: false,
    popularNearYou: true,
    description: 'Run through Mumbai’s iconic Queen’s Necklace under the soothing sea breeze and midnight city lights. With 21K, 10K, and 5K fun run categories, this marathon provides an electric atmosphere with live percussion bands along the course.',
    highlights: [
      'Certified timing chip bib with real-time SMS tracking',
      'Dri-fit commemorative marathon running jersey',
      'Heavy cast collector finisher medal for all participants',
      'Hydration, energy gels, and medical aid every 1.5 km',
      'Warm post-race breakfast banquet at sunrise'
    ],
    schedule: [
      { time: '10:00 PM', activity: 'Bib Verification & Baggage Drop' },
      { time: '11:15 PM', activity: 'Zumba & Dynamic Warmup Session' },
      { time: '11:45 PM', activity: '21K Half Marathon Flag-off' },
      { time: '12:15 AM', activity: '10K Challenge Flag-off' },
      { time: '12:45 AM', activity: '5K Fun Run Flag-off' },
      { time: '03:30 AM', activity: 'Podium Ceremony & Medal Distribution' }
    ],
    organizer: {
      id: 'org-3',
      name: 'RunIndia Sports League',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      bio: 'National athletics organization promoting fitness and endurance running across major Indian metropolitan cities.',
      eventsCount: 16,
      followersCount: '32.1K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: '21K Half Marathon (Timed)',
        price: 1499,
        description: 'Includes RFID timing chip, premium dri-fit jersey, finisher medal, and sunrise breakfast.',
        availableCount: 80,
        perks: ['Official timing chip with e-certificate', 'Premium running singlet', 'Finisher heavy metal medal', 'Priority start corral']
      },
      {
        id: 'premium',
        name: '10K Challenge (Timed)',
        price: 1099,
        description: 'Official 10K timed race route with personalized bib and medal.',
        availableCount: 140,
        perks: ['Official timing bib', 'Marathon tee & race kit', 'Finisher medal & breakfast']
      },
      {
        id: 'general',
        name: '5K Community Joy Run',
        price: 799,
        description: 'Fun non-timed 5K run suitable for beginners, families, and casual joggers.',
        availableCount: 300,
        perks: ['Event t-shirt & bib', 'Hydration support', 'Finisher ribbon & snack box']
      }
    ]
  },
  {
    id: 'evt-104',
    title: 'Startup Connect Pune 2026',
    slug: 'startup-connect-pune',
    category: 'business',
    categoryName: 'Business',
    categoryBadge: 'badge-business',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&auto=format&fit=crop&q=80',
    date: '2026-10-25',
    time: '10:00 AM - 05:30 PM',
    displayDate: 'Sun, Oct 25, 2026',
    day: '25',
    month: 'OCT',
    location: 'Koregaon Park, Pune',
    venue: 'Westin Ballroom & Convention Hall',
    address: '36/3-B, Koregaon Park Annexe, Ghorpadi, Pune, Maharashtra 411001',
    city: 'Pune',
    price: 899,
    rating: 4.6,
    reviewCount: 520,
    trending: false,
    featured: false,
    popularNearYou: true,
    description: 'Pune’s biggest gathering of tech founders, angel investors, growth marketers, and ecosystem enablers. Featuring live pitching to 20+ VC funds, pitch masterclasses, and curated B2B matchmaking.',
    highlights: [
      '20+ active venture funds looking for Seed & Series-A startups',
      'Live "Shark Arena" pitch showdown with ₹25 Lakh grant prize',
      '1-on-1 scheduled office hours with seasoned founders',
      'Product showcase booths for early-stage demoing',
      'Exclusive networking cocktails in the evening'
    ],
    schedule: [
      { time: '09:30 AM', activity: 'Registrations & Morning Networking' },
      { time: '10:30 AM', activity: 'Fireside Chat: Bootstrapping to $10M ARR' },
      { time: '12:00 PM', activity: 'Live VC Pitch Round 1' },
      { time: '01:30 PM', activity: 'Founder Luncheon & Expo Walk' },
      { time: '03:00 PM', activity: 'Workshop: Go-to-Market in Global SaaS' },
      { time: '05:00 PM', activity: 'Pitch Awards & Networking Drinks' }
    ],
    organizer: {
      id: 'org-4',
      name: 'Pune Tech Incubator Network',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      bio: 'Ecosystem catalyst bringing together innovators and investors across Maharashtra.',
      eventsCount: 19,
      followersCount: '21.4K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'Founder VIP Pitch Pass',
        price: 2499,
        description: 'Guaranteed 3-minute pitch slot in front of VC jury, private lounge pass, and mentor directory.',
        availableCount: 25,
        perks: ['Live VC pitch slot submission', 'Access to closed investor lounge', 'Curated meeting matchmaking', 'Evening dinner entry']
      },
      {
        id: 'premium',
        name: 'Pro Delegate Ticket',
        price: 1499,
        description: 'Access to all keynote panels, workshops, and business lunch.',
        availableCount: 90,
        perks: ['Full day conference access', 'Workshop tracks entry', 'Networking buffet lunch']
      },
      {
        id: 'general',
        name: 'Early Bird General Pass',
        price: 899,
        description: 'Standard access to keynote auditorium and demo exhibition.',
        availableCount: 180,
        perks: ['Auditorium seating', 'Demo booth area access', 'Event digital networking app']
      }
    ]
  },
  {
    id: 'evt-105',
    title: 'The Comedy Factory: Stand-up Royale',
    slug: 'the-comedy-factory-royale',
    category: 'theater',
    categoryName: 'Theater & Comedy',
    categoryBadge: 'badge-theater',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1600&auto=format&fit=crop&q=80',
    date: '2026-10-12',
    time: '08:00 PM - 10:00 PM',
    displayDate: 'Sun, Oct 12, 2026',
    day: '12',
    month: 'OCT',
    location: 'Connaught Place, New Delhi',
    venue: 'Kamani Auditorium',
    address: '1 Copernicus Marg, Mandi House, New Delhi, Delhi 110001',
    city: 'Delhi',
    price: 499,
    rating: 4.9,
    reviewCount: 1120,
    trending: true,
    featured: false,
    popularNearYou: false,
    description: 'An evening of non-stop laughter featuring 5 of India\'s funniest comedic minds delivering brand new, unreleased stand-up specials. Get ready for hilarious observations on modern Indian culture, dating in metro cities, and corporate life.',
    highlights: [
      'Star line-up of 5 celebrated stand-up comics',
      'Completely fresh, unrecorded punchlines and crowd work',
      'Air-conditioned acoustic auditorium with plush seating',
      'Snacks and mocktails counter available prior to showtime'
    ],
    schedule: [
      { time: '07:15 PM', activity: 'Doors Open & Foyer Social' },
      { time: '08:00 PM', activity: 'Host Welcome & Opening Stand-up Set' },
      { time: '08:30 PM', activity: 'Feature Comic Sets (Back-to-Back)' },
      { time: '09:30 PM', activity: 'Headliner Finale Act' },
      { time: '10:00 PM', activity: 'Curtain Drop & Fan Meet' }
    ],
    organizer: {
      id: 'org-5',
      name: 'LaughClub India',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
      bio: 'Leading comedy circuit bringing high-decibel humor and theater experiences across India.',
      eventsCount: 45,
      followersCount: '58.9K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'Front Rows VIP',
        price: 1299,
        description: 'Prime front 3 rows seating with interactive crowd work experience.',
        availableCount: 30,
        perks: ['Front-row reserved seating', 'Backstage artist photo-op', 'Complimentary popcorn tub']
      },
      {
        id: 'premium',
        name: 'Middle Tier Gold',
        price: 799,
        description: 'Excellent central view with high acoustic clarity.',
        availableCount: 110,
        perks: ['Central acoustic sweet-spot', 'Reserved seat selection']
      },
      {
        id: 'general',
        name: 'Balcony Silver',
        price: 499,
        description: 'Clear elevated view of the full stage at an accessible price.',
        availableCount: 190,
        perks: ['Elevated balcony view', 'Standard auditorium entry']
      }
    ]
  },
  {
    id: 'evt-106',
    title: 'Indie Wave Music Festival 2026',
    slug: 'indie-wave-music-festival',
    category: 'music',
    categoryName: 'Music',
    categoryBadge: 'badge-music',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80',
    date: '2026-11-14',
    time: '03:00 PM - 11:30 PM',
    displayDate: 'Sat, Nov 14, 2026',
    day: '14',
    month: 'NOV',
    location: 'Gachibowli, Hyderabad',
    venue: 'GMC Balayogi Stadium Lawns',
    address: 'Old Mumbai Highway, Gachibowli, Hyderabad, Telangana 500032',
    city: 'Hyderabad',
    price: 1299,
    rating: 4.8,
    reviewCount: 760,
    trending: true,
    featured: false,
    popularNearYou: false,
    description: 'A 2-day open-air celebration of independent indie-rock, dream-pop, hip-hop, and electronica. Discover breakthrough Indian independent singer-songwriters alongside internationally acclaimed indie bands across dual stages.',
    highlights: [
      'Dual live stages with zero sound bleed',
      '14 indie bands and solo artists performing live',
      'Art installations, chillout domes, and flea bazaar',
      'Local Hyderabad craft beverage and street food popups',
      'Eco-conscious zero single-use plastic festival grounds'
    ],
    schedule: [
      { time: '03:00 PM', activity: 'Gates Open & Acoustic Sunset Stage' },
      { time: '05:00 PM', activity: 'Indie Rock Power Sets' },
      { time: '07:30 PM', activity: 'Electronic & Synth-Pop Showcase' },
      { time: '09:45 PM', activity: 'Festival Headliner: When Chai Met Toast & Friends' },
      { time: '11:30 PM', activity: 'Festival Day 1 Wrap' }
    ],
    organizer: {
      id: 'org-6',
      name: 'IndieVibe Collectives',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
      bio: 'Independent music movement promoting alternative youth culture and open-air fests.',
      eventsCount: 28,
      followersCount: '37.8K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'VIP Deck & Lounge',
        price: 2799,
        description: 'Elevated wooden deck overlooking both stages with dedicated bar.',
        availableCount: 45,
        perks: ['Elevated panoramic stage view', 'Unlimited premium mocktails/beverages', 'Festival tote bag & official merch', 'Private express restrooms']
      },
      {
        id: 'premium',
        name: 'Fan Pit Pass',
        price: 1799,
        description: 'Unobstructed access right up to the stage barriers.',
        availableCount: 160,
        perks: ['Front-barrier fan zone access', 'Commemorative fabric wristband']
      },
      {
        id: 'general',
        name: 'Single Day General Pass',
        price: 1299,
        description: 'Full festival grounds, flea market, and stages access.',
        availableCount: 400,
        perks: ['Lawn entry for all 14 acts', 'Flea market and food village access']
      }
    ]
  },
  {
    id: 'evt-107',
    title: 'Design Thinking & AI Innovation Masterclass',
    slug: 'design-thinking-ai-workshop',
    category: 'workshops',
    categoryName: 'Workshops',
    categoryBadge: 'badge-workshop',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&q=80',
    date: '2026-10-31',
    time: '10:00 AM - 04:00 PM',
    displayDate: 'Sat, Oct 31, 2026',
    day: '31',
    month: 'OCT',
    location: 'Indiranagar, Bengaluru',
    venue: 'The Co-Work Hub Studio',
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    city: 'Bangalore',
    price: 1199,
    rating: 4.9,
    reviewCount: 310,
    trending: false,
    featured: false,
    popularNearYou: true,
    description: 'An intensive interactive in-person workshop blending human-centered design thinking with state-of-the-art AI prototyping tools. Learn how to transform user research into rapid AI-powered clickable product concepts in just 6 hours.',
    highlights: [
      'Interactive sprint format with real-world case studies',
      'Hands-on Figma + AI wireframing tools integration',
      'Small batch size (max 40 participants) for direct mentoring',
      'Physical design workbook & digital toolkit resources',
      'Recognized industry completion certificate'
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Empathy Mapping & Problem Framing' },
      { time: '11:30 AM', activity: 'Ideation with Generative AI Models' },
      { time: '01:00 PM', activity: 'Working Lunch & Peer Feedback' },
      { time: '02:00 PM', activity: 'Rapid Interactive Prototyping Sprint' },
      { time: '03:30 PM', activity: 'Pitching, Design Review & Certifications' }
    ],
    organizer: {
      id: 'org-7',
      name: 'ProductDesign Guild',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80',
      bio: 'Leading community of UX researchers, product managers, and UI architects across India.',
      eventsCount: 14,
      followersCount: '19.2K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'Pro Mentor Pass',
        price: 1999,
        description: 'Includes 1-hour 1-on-1 portfolio review after the workshop and lifetime kit access.',
        availableCount: 12,
        perks: ['1-on-1 portfolio & CV review', 'Full prompt library & Figma kit', 'All workshop recordings', 'Gourmet lunch included']
      },
      {
        id: 'general',
        name: 'Standard Workshop Seat',
        price: 1199,
        description: 'Full 6-hour interactive masterclass participation and workshop materials.',
        availableCount: 28,
        perks: ['Live masterclass attendance', 'Physical workbook', 'Certificate of completion', 'Lunch & coffee included']
      }
    ]
  },
  {
    id: 'evt-108',
    title: 'The Great Indian Food & Lifestyle Fest',
    slug: 'food-and-culture-fest',
    category: 'food',
    categoryName: 'Food & Lifestyle',
    categoryBadge: 'badge-food',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=80',
    date: '2026-11-08',
    time: '12:00 PM - 10:00 PM',
    displayDate: 'Sun, Nov 08, 2026',
    day: '08',
    month: 'NOV',
    location: 'Nungambakkam, Chennai',
    venue: 'Express Avenue Central Courtyard',
    address: 'Club House Road, Royapettah, Chennai, Tamil Nadu 600002',
    city: 'Chennai',
    price: 349,
    rating: 4.7,
    reviewCount: 680,
    trending: false,
    featured: false,
    popularNearYou: false,
    description: 'A culinary carnival bringing together 60+ artisan food stalls, heritage street delicacies, live chef cooking battles, and acoustic performances. Savor everything from Chettinad royal roasts to modern nitro desserts.',
    highlights: [
      '60+ handpicked regional & international cuisine stalls',
      'Live masterclasses by celebrity MasterChef judges',
      'Artisanal flea market with organic spices and home decor',
      'Kids amusement corner and dessert tasting trails',
      'Sunset acoustic concert by regional fusion bands'
    ],
    schedule: [
      { time: '12:00 PM', activity: 'Food Village & Flea Marketplace Opens' },
      { time: '02:30 PM', activity: 'Live Chef Cook-off: Southern Flavors Reimagined' },
      { time: '04:30 PM', activity: 'Pastry & Dessert Decorating Masterclass' },
      { time: '06:30 PM', activity: 'Sunset Acoustic Live Band' },
      { time: '09:30 PM', activity: 'Best Food Stall Awards Ceremony' }
    ],
    organizer: {
      id: 'org-8',
      name: 'GourmetEvents Co.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
      bio: 'Curators of culinary lifestyle festivals and artisanal food expos across major Indian cities.',
      eventsCount: 30,
      followersCount: '44.1K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'Foodie VIP Tasting Pass',
        price: 999,
        description: 'Includes ₹600 food coupons, priority lounge, and reserved seating for chef masterclasses.',
        availableCount: 60,
        perks: ['₹600 food/drink coupon card', 'Chef masterclass front-row seat', 'VIP seating lounge with AC', 'Complimentary tasting tote']
      },
      {
        id: 'general',
        name: 'Fest Entry Ticket',
        price: 349,
        description: 'Standard single-day festival access to all 60+ stalls and live music stage.',
        availableCount: 500,
        perks: ['Festival entry bracelet', 'Access to all food pavilions', 'Sunset live concert view']
      }
    ]
  },
  {
    id: 'evt-109',
    title: 'Heritage Art & Contemporary Canvas Expo',
    slug: 'heritage-art-contemporary-canvas-expo',
    category: 'art',
    categoryName: 'Art & Culture',
    categoryBadge: 'badge-art',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1600&auto=format&fit=crop&q=80',
    date: '2026-11-28',
    time: '11:00 AM - 08:00 PM',
    displayDate: 'Sat, Nov 28, 2026',
    day: '28',
    month: 'NOV',
    location: 'Kala Ghoda, Mumbai',
    venue: 'Jehangir Art Gallery',
    address: '161B, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai, Maharashtra 400001',
    city: 'Mumbai',
    price: 299,
    rating: 4.8,
    reviewCount: 410,
    trending: false,
    featured: false,
    popularNearYou: true,
    description: 'An inspiring showcase connecting traditional Indian folk arts (Madhubani, Warli, Tanjore) with cutting-edge contemporary digital and resin canvas works by 80+ rising visual artists.',
    highlights: [
      'Over 200 original artwork pieces on exhibition and sale',
      'Curator-led gallery walks with artist discussions',
      'Live live-painting demonstrations every 2 hours',
      'Art print marketplace with signed limited-edition prints'
    ],
    schedule: [
      { time: '11:00 AM', activity: 'Gallery Doors Open to Public' },
      { time: '01:00 PM', activity: 'Curator Gallery Tour (Batch 1)' },
      { time: '03:30 PM', activity: 'Live Resin Art Demonstration' },
      { time: '05:30 PM', activity: 'Panel: Collecting Art in the 21st Century' },
      { time: '08:00 PM', activity: 'Evening Gallery Close' }
    ],
    organizer: {
      id: 'org-9',
      name: 'ArtHorizon Trust',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&auto=format&fit=crop&q=80',
      bio: 'Non-profit arts foundation bridging rural folk heritage with modern metropolitan galleries.',
      eventsCount: 18,
      followersCount: '25.6K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'Collector Preview Pass',
        price: 799,
        description: 'Includes private 1-hour pre-opening tour with artists, catalog, and curator guide.',
        availableCount: 20,
        perks: ['Exclusive private curator walkthrough', 'Hardcover exhibition art catalog', 'Artist meet-and-greet reception']
      },
      {
        id: 'general',
        name: 'General Gallery Ticket',
        price: 299,
        description: 'Single day pass to all exhibition wings and live demos.',
        availableCount: 200,
        perks: ['All gallery wings access', 'Live art demo observation']
      }
    ]
  },
  {
    id: 'evt-110',
    title: 'Pro Cricket League Finals 2026',
    slug: 'pro-cricket-league-finals',
    category: 'sports',
    categoryName: 'Sports & Fitness',
    categoryBadge: 'badge-sports',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&auto=format&fit=crop&q=80',
    date: '2026-12-06',
    time: '07:00 PM - 11:30 PM',
    displayDate: 'Sun, Dec 06, 2026',
    day: '06',
    month: 'DEC',
    location: 'Churchgate, Mumbai',
    venue: 'Wankhede International Stadium',
    address: 'Vinoo Mankad Rd, Churchgate, Mumbai, Maharashtra 400020',
    city: 'Mumbai',
    price: 1899,
    rating: 4.9,
    reviewCount: 3200,
    trending: true,
    featured: false,
    popularNearYou: true,
    description: 'The titanic clash of the tournament! Witness top international cricketers battle it out for the coveted championship trophy amidst a thunderous 33,000-strong crowd under floodlights.',
    highlights: [
      'Championship final match under world-class floodlights',
      'Grand mid-innings laser and drone fireworks spectacular',
      'Cheer zones with free flags, team horns, and face paint',
      'Giant screens with live Hawk-Eye analytics'
    ],
    schedule: [
      { time: '04:30 PM', activity: 'Stadium Gates Open' },
      { time: '06:30 PM', activity: 'Toss & National Anthem' },
      { time: '07:00 PM', activity: 'Innings 1 Flag-off' },
      { time: '08:45 PM', activity: 'Drone Laser Light Show & Mid-Innings' },
      { time: '09:05 PM', activity: 'Innings 2 Chase' },
      { time: '11:15 PM', activity: 'Trophy Presentation & Victory Lap' }
    ],
    organizer: {
      id: 'org-10',
      name: 'National Premier League Board',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=80',
      bio: 'Apex governing body organizing top-tier sports leagues across stadiums nationwide.',
      eventsCount: 50,
      followersCount: '180K'
    },
    ticketTiers: [
      {
        id: 'vip',
        name: 'Sachin Tendulkar Stand (Hospitality)',
        price: 4999,
        description: 'Air-conditioned hospitality suite with gourmet dining and bar.',
        availableCount: 15,
        perks: ['Air-conditioned suite with balcony seats', '5-star buffet dinner and drinks', 'Souvenir jersey & match ball replica']
      },
      {
        id: 'premium',
        name: 'Sunil Gavaskar Pavilion',
        price: 2899,
        description: 'Prime lower tier directly adjacent to player dugouts.',
        availableCount: 45,
        perks: ['Player dugout view', 'Shaded comfortable stadium bucket seats', 'Free cheer kit']
      },
      {
        id: 'general',
        name: 'North Stand Upper Tier',
        price: 1899,
        description: 'High-energy fan zone famous for the loudest cheers.',
        availableCount: 180,
        perks: ['Full ground view', 'Stadium match entry']
      }
    ]
  }
];

export const citiesList = [
  'All Cities',
  'Mumbai',
  'Pune',
  'Bangalore',
  'Delhi',
  'Hyderabad',
  'Chennai'
];
