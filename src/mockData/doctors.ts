export const DOCTORS = [
  {
    id: '1',
    name: 'Dr. John Smith',
    university: 'Harvard School of Dental Medicine',
    specialty: 'Orthodontist',
    experience: '7 years exp.',
    rating: 4.9,
    reviewsCount: 120,
    image: require('../assets/images/dr.jpg'),

    about:
      'Dedicated orthodontist with a passion for creating healthy, confident smiles using modern technologies.',

    education: {
      university: 'Harvard School of Dental Medicine',
      period: '2010 - 2014',
      degree: 'Doctor of Dental Medicine (DMD)',
    },

    stats: {
      patients: '120+',
      experience: '7+',
      satisfaction: '98%',
    },

    reviews: [
      {
        id: 'r1',
        name: 'Emily R.',
        avatar: 'https://i.pravatar.cc/100?img=1',
        rating: 5,
        text: 'Dr. John is amazing! Very professional and explained everything clearly.',
        date: '2 weeks ago',
      },
      {
        id: 'r2',
        name: 'Michael T.',
        avatar: 'https://i.pravatar.cc/100?img=2',
        rating: 5,
        text: 'Great experience and awesome results. Highly recommend!',
        date: '1 month ago',
      },
      {
        id: 'r3',
        name: 'Jessica L.',
        avatar: 'https://i.pravatar.cc/100?img=3',
        rating: 5,
        text: 'Friendly and very skilled doctor. My teeth look perfect now!',
        date: '2 months ago',
      },
    ],
  },

  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    university: 'Stanford Dental School',
    specialty: 'Dentist',
    experience: '5 years exp.',
    rating: 4.8,
    reviewsCount: 98,
    image: require('../assets/images/dr.jpg'),

    about:
      'Experienced dentist focused on preventive care and long-term oral health.',

    education: {
      university: 'Stanford Dental School',
      period: '2012 - 2016',
      degree: 'Doctor of Dental Surgery (DDS)',
    },

    stats: {
      patients: '90+',
      experience: '5+',
      satisfaction: '96%',
    },

    reviews: [
      {
        id: 'r1',
        name: 'Anna K.',
        avatar: 'https://i.pravatar.cc/100?img=4',
        rating: 5,
        text: 'Very gentle and внимательная. Highly recommend!',
        date: '3 weeks ago',
      },
    ],
  },

  {
    id: '3',
    name: 'Dr. Michael Lee',
    university: 'UCLA School of Dentistry',
    specialty: 'Oral Surgeon',
    experience: '10 years exp.',
    rating: 4.9,
    reviewsCount: 150,
    image: require('../assets/images/dr.jpg'),

    about: 'Specialist in complex surgical procedures with high success rates.',

    education: {
      university: 'UCLA School of Dentistry',
      period: '2008 - 2012',
      degree: 'DDS',
    },

    stats: {
      patients: '200+',
      experience: '10+',
      satisfaction: '99%',
    },

    reviews: [],
  },

  {
    id: '4',
    name: 'Dr. Emily Davis',
    university: 'NYU College of Dentistry',
    specialty: 'Pediatric Dentist',
    experience: '6 years exp.',
    rating: 4.7,
    reviewsCount: 80,
    image: require('../assets/images/dr.jpg'),

    about: 'Loves working with children and making dental visits stress-free.',

    education: {
      university: 'NYU College of Dentistry',
      period: '2013 - 2017',
      degree: 'DDS',
    },

    stats: {
      patients: '110+',
      experience: '6+',
      satisfaction: '95%',
    },

    reviews: [],
  },

  {
    id: '5',
    name: 'Dr. David Brown',
    university: 'Columbia University Dental School',
    specialty: 'Periodontist',
    experience: '8 years exp.',
    rating: 4.8,
    reviewsCount: 110,
    image: require('../assets/images/dr.jpg'),

    about: 'Expert in gum diseases and implant procedures.',

    education: {
      university: 'Columbia University Dental School',
      period: '2011 - 2015',
      degree: 'DDS',
    },

    stats: {
      patients: '130+',
      experience: '8+',
      satisfaction: '97%',
    },

    reviews: [],
  },

  {
    id: '6',
    name: 'Dr. Olivia Wilson',
    university: 'University of Michigan Dentistry',
    specialty: 'Endodontist',
    experience: '9 years exp.',
    rating: 4.9,
    reviewsCount: 140,
    image: require('../assets/images/dr.jpg'),

    about: 'Specialist in root canal treatments with painless techniques.',

    education: {
      university: 'University of Michigan Dentistry',
      period: '2009 - 2013',
      degree: 'DDS',
    },

    stats: {
      patients: '180+',
      experience: '9+',
      satisfaction: '99%',
    },

    reviews: [],
  },

  {
    id: '7',
    name: 'Dr. James Taylor',
    university: 'University of Washington Dentistry',
    specialty: 'Prosthodontist',
    experience: '12 years exp.',
    rating: 4.9,
    reviewsCount: 170,
    image: require('../assets/images/dr.jpg'),

    about: 'Focus on restorative and cosmetic dental solutions.',

    education: {
      university: 'University of Washington Dentistry',
      period: '2006 - 2010',
      degree: 'DDS',
    },

    stats: {
      patients: '250+',
      experience: '12+',
      satisfaction: '99%',
    },

    reviews: [],
  },
];
