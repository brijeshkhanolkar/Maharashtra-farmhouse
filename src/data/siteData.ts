export interface PackageInfo {
  id: string;
  name: string;
  subtitle: string;
  pricePerPerson: number;
  timing: string;
  inclusions: string[];
  image: string;
  highlight?: string;
  idealFor: string;
  timingOptions?: string[];
}

export const packagesData: PackageInfo[] = [
  {
    id: 'day',
    name: 'Day Package',
    subtitle: 'A full day of poolside relaxation and countryside calm',
    pricePerPerson: 1000,
    timing: '11 AM to 11 PM',
    inclusions: [
      'One lunch (Authentic Malwani style)',
      'Evening tea'
    ],
    image: '/assets/photos/pool-daytime.jpg',
    idealFor: 'Day outings, family get-togethers, and quick group escapes'
  },
  {
    id: 'night',
    name: 'Night Package',
    subtitle: 'Under the starlit sky with dinner and morning breakfast',
    pricePerPerson: 1000,
    timing: '7 PM to 9 AM',
    inclusions: [
      'One meal (Dinner)',
      'Breakfast',
      'Morning tea'
    ],
    image: '/assets/photos/hero-cart-night.jpg',
    idealFor: 'Evening gatherings, overnight stays, and late dinners'
  },
  {
    id: '24hr',
    name: '24-Hour Package',
    subtitle: 'The complete retreat experience with AC room and activities',
    pricePerPerson: 2000,
    timing: '11 AM to 11 AM or 7 PM to 7 PM',
    timingOptions: ['11 AM to 11 AM', '7 PM to 7 PM'],
    inclusions: [
      'Two meals',
      'Tea twice',
      'AC room accommodation',
      'Two activities included'
    ],
    image: '/assets/photos/pool-night.jpg',
    highlight: 'Most Popular',
    idealFor: 'Full weekend getaways, extended family gatherings, and group celebrations'
  }
];

export interface MenuItem {
  category: 'vegetarian' | 'non-vegetarian';
  title: string;
  description: string;
  image: string;
  dishes: string[];
}

export const diningData: MenuItem[] = [
  {
    category: 'vegetarian',
    title: 'Vegetarian Menu',
    description: 'A traditional Maharashtrian vegetarian feast prepared with aromatic spices, fresh coconut, and authentic regional gravies.',
    image: '/assets/photos/dining-thali-veg.jpg',
    dishes: [
      'Roti',
      'Pandhra Rassa',
      'Tambada Rassa',
      'Solkadi',
      'Jeera Rice',
      'Papad',
      'Veg Mix / Kaju Paneer / Kaju Masala / Paneer Masala'
    ]
  },
  {
    category: 'non-vegetarian',
    title: 'Non-Vegetarian Menu',
    description: 'Flavourful countryside Malwani non-vegetarian cuisine served with signature coastal gravies and freshly prepared staples.',
    image: '/assets/photos/dining-thali-nonveg.jpg',
    dishes: [
      'Roti',
      'Pandhra Rassa',
      'Tambada Rassa',
      'Solkadi',
      'Jeera Rice',
      'Chicken Malwani / Chicken Gravy / Chicken Fry'
    ]
  }
];

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  accentNote?: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'pool',
    title: 'Swimming Pool',
    category: 'Water & Leisure',
    description: 'Take a cooling swim during sunlit afternoons or relax beside illuminated waters at night. The pool is positioned right alongside the wooden cottages for easy access.',
    image: '/assets/photos/pool-night.jpg',
    accentNote: 'Day and evening access'
  },
  {
    id: 'waterfall',
    title: 'Stone Waterfall Feature',
    category: 'Landscape Architecture',
    description: 'An artisanal natural rock waterfall with multi-tiered water cascading into the pool area, illuminated with ambient evening lighting.',
    image: '/assets/photos/waterfall.jpg',
    accentNote: 'Scenic water cascade'
  },
  {
    id: 'cricket',
    title: 'Cricket Setup',
    category: 'Outdoor Sports',
    description: 'Enjoy casual games or friendly matches on open grass with dedicated wooden stumps and night floodlights for evening play.',
    image: '/assets/photos/cricket-turf.jpg',
    accentNote: 'Floodlit evening play'
  },
  {
    id: 'lawn',
    title: 'Spacious Lawn Area',
    category: 'Open Air',
    description: 'Manicured green lawn space surrounded by countryside quietude, suitable for morning yoga, evening walks, and open-air gatherings.',
    image: '/assets/photos/lawn-garden.jpg',
    accentNote: 'Ample open space'
  },
  {
    id: 'pergola',
    title: 'Pergola & Outdoor Seating',
    category: 'Gatherings & Dining',
    description: 'A solid timber pavilion with rustic seating, hanging lanterns, and warm overhead lighting. Perfect for group meals, tea sessions, and late-night talks.',
    image: '/assets/photos/pergola-dining.jpg',
    accentNote: 'Covered group dining'
  },
  {
    id: 'living',
    title: 'Indoor Living Space',
    category: 'Comfort & Rest',
    description: 'A cozy air-conditioned indoor lounge fitted with comfortable sofa seating, wooden wall accents, and warm ambient lighting for quiet downtime.',
    image: '/assets/photos/living-room.jpg',
    accentNote: 'Comfortable indoor lounge'
  }
];

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: 'all' | 'cottages' | 'rooms' | 'pool' | 'dining' | 'activities';
  title: string;
  subtitle: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: '/assets/photos/hero-pool-night.jpg',
    alt: 'Illuminated wooden farmhouse cottages and swimming pool at night',
    category: 'cottages',
    title: 'Main Property & Pool at Dusk',
    subtitle: 'Illuminated timber cottages reflecting across the swimming pool'
  },
  {
    id: 'gal-2',
    src: '/assets/photos/hero-cart-night.jpg',
    alt: 'Illuminated cottage with traditional wooden cart on lawn',
    category: 'cottages',
    title: 'Countryside Cottage Exterior',
    subtitle: 'Traditional wooden cart wheel and warm architectural lighting'
  },
  {
    id: 'gal-3',
    src: '/assets/photos/pool-daytime.jpg',
    alt: 'Swimming pool under daytime sunlight with cottages and lawns',
    category: 'pool',
    title: 'Sunlit Swimming Pool',
    subtitle: 'Crystal clear waters surrounded by landscaped grounds'
  },
  {
    id: 'gal-4',
    src: '/assets/photos/pool-night.jpg',
    alt: 'Swimming pool illuminated with azure water at night',
    category: 'pool',
    title: 'Night Pool Ambiance',
    subtitle: 'Serene evening atmosphere with waterside lighting'
  },
  {
    id: 'gal-5',
    src: '/assets/photos/room-master.jpg',
    alt: 'Wooden AC bedroom interior with warm ceiling beams and bed',
    category: 'rooms',
    title: 'Wooden AC Master Bedroom',
    subtitle: 'Warm timber wall paneling, comfortable bedding, and air conditioning'
  },
  {
    id: 'gal-6',
    src: '/assets/photos/room-wide.jpg',
    alt: 'Wide view of AC bedroom with timber ceiling',
    category: 'rooms',
    title: 'Timber Bedroom Suite',
    subtitle: 'Natural wood finish, soft lighting, and countryside quiet'
  },
  {
    id: 'gal-7',
    src: '/assets/photos/room-bed-detail.jpg',
    alt: 'Master bedroom bed detail with wooden headboard',
    category: 'rooms',
    title: 'Bedroom Comfort Details',
    subtitle: 'Clean linens and rich natural woodwork'
  },
  {
    id: 'gal-8',
    src: '/assets/photos/room-balcony-view.jpg',
    alt: 'Bedroom view towards balcony entrance and wardrobe',
    category: 'rooms',
    title: 'Room Balcony Aspect',
    subtitle: 'Glass doors welcoming natural light and fresh countryside air'
  },
  {
    id: 'gal-9',
    src: '/assets/photos/living-room.jpg',
    alt: 'Indoor living area with sofas and warm decor',
    category: 'rooms',
    title: 'Indoor Living Lounge',
    subtitle: 'Relaxed sofa seating and tasteful interior styling'
  },
  {
    id: 'gal-10',
    src: '/assets/photos/waterfall.jpg',
    alt: 'Stone waterfall feature illuminated with ambient colors',
    category: 'pool',
    title: 'Natural Stone Waterfall',
    subtitle: 'Water cascading over dark stone ledges into the pool'
  },
  {
    id: 'gal-11',
    src: '/assets/photos/cricket-turf.jpg',
    alt: 'Cricket pitch setup with wickets on green lawn under night floodlights',
    category: 'activities',
    title: 'Floodlit Cricket Setup',
    subtitle: 'Pitch ready for friendly group and family matches'
  },
  {
    id: 'gal-12',
    src: '/assets/photos/lawn-garden.jpg',
    alt: 'Manicured lawn with garden lighting at dusk',
    category: 'activities',
    title: 'Lawn & Garden Paths',
    subtitle: 'Expansive grass areas under evening sky'
  },
  {
    id: 'gal-13',
    src: '/assets/photos/pergola-dining.jpg',
    alt: 'Outdoor pergola pavilion with dining seating at night',
    category: 'dining',
    title: 'Pergola Dining Lounge',
    subtitle: 'Covered wooden pavilion with red seating and warm lanterns'
  },
  {
    id: 'gal-14',
    src: '/assets/photos/dining-thali-veg.jpg',
    alt: 'Traditional Vegetarian Malwani Thali spread with Solkadi and Rassa',
    category: 'dining',
    title: 'Authentic Vegetarian Malwani Thali',
    subtitle: 'Fresh Solkadi, Pandhra Rassa, Tambada Rassa, Jeera Rice, and Veg special'
  },
  {
    id: 'gal-15',
    src: '/assets/photos/dining-thali-nonveg.jpg',
    alt: 'Authentic Non-Vegetarian Malwani Thali with Chicken and Solkadi',
    category: 'dining',
    title: 'Authentic Non-Vegetarian Thali',
    subtitle: 'Chicken Malwani, Pandhra Rassa, Tambada Rassa, and fresh accompaniments'
  },
  {
    id: 'gal-16',
    src: '/assets/photos/cottage-entrance.jpg',
    alt: 'Property entrance and walkway with illuminated cottages',
    category: 'cottages',
    title: 'Farmhouse Arrival',
    subtitle: 'Welcoming evening approach to the property'
  }
];

export const locationDetails = {
  mapsUrl: 'https://maps.google.com/maps?q=16.797826766967773%2C74.64456176757812&z=17&hl=en',
  embedMapUrl: 'https://maps.google.com/maps?q=16.797826766967773,74.64456176757812&hl=en&z=14&output=embed',
  coordinates: '16.797827, 74.644562',
  region: 'Maharashtra, India',
  directionsAdvice: 'Located in scenic countryside Maharashtra with direct roadway access. Click Get Directions for real-time turn-by-turn navigation on Google Maps.'
};
