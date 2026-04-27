import { Doctor } from '../interfaces/doctor.types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. John Smith',
    specialty: 'Orthodontist',
    experience: 7,
    rating: 4.9,
    image: require('../assets/images/dr.jpg'),

    about:
      'Dedicated orthodontist specializing in modern braces and Invisalign treatments.',

    education: {
      university: 'Harvard School of Dental Medicine',
      period: '2010 - 2014',
      degree: 'Doctor of Dental Medicine (DMD)',
    },

    stats: {
      patients: 120,
      satisfaction: 98,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [10, 11, 12, 15, 18, 20, 22, 25],
      availableTimes: [
        '09:00 AM',
        '10:00 AM',
        '11:30 AM',
        '02:00 PM',
        '04:00 PM',
      ],
    },

    reviews: [
      {
        id: 'r1',
        name: 'Emily R.',
        avatar: 'https://i.pravatar.cc/100?img=1',
        rating: 5,
        text: 'Amazing experience, very professional!',
        date: '2 weeks ago',
      },
      {
        id: 'r2',
        name: 'Michael T.',
        avatar: 'https://i.pravatar.cc/100?img=2',
        rating: 5,
        text: 'Highly recommend, results are perfect.',
        date: '1 month ago',
      },
    ],
  },

  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Dentist',
    experience: 5,
    rating: 4.8,

    image: require('../assets/images/dr.jpg'),

    about: 'Focused on preventive care and patient comfort during every visit.',

    education: {
      university: 'Stanford Dental School',
      period: '2012 - 2016',
      degree: 'DDS',
    },

    stats: {
      patients: 90,
      satisfaction: 96,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [9, 11, 13, 16, 19, 21, 24],
      availableTimes: [
        '09:30 AM',
        '10:30 AM',
        '12:00 PM',
        '03:00 PM',
        '05:00 PM',
      ],
    },

    reviews: [
      {
        id: 'r1',
        name: 'Anna K.',
        avatar: 'https://i.pravatar.cc/100?img=4',
        rating: 5,
        text: 'Very gentle and attentive doctor.',
        date: '3 weeks ago',
      },
    ],
  },

  {
    id: '3',
    name: 'Dr. Michael Lee',
    specialty: 'Oral Surgeon',
    experience: 10,
    rating: 4.9,
    image: require('../assets/images/dr.jpg'),
    about: 'Expert in oral surgeries and complex dental procedures.',
    education: {
      university: 'UCLA School of Dentistry',
      period: '2008 - 2012',
      degree: 'DDS',
    },

    stats: {
      patients: 200,
      satisfaction: 99,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [12, 14, 17, 19, 23, 26],
      availableTimes: ['08:00 AM', '09:00 AM', '01:00 PM', '03:00 PM'],
    },

    reviews: [],
  },

  {
    id: '4',
    name: 'Dr. Emily Davis',
    specialty: 'Pediatric Dentist',
    experience: 6,
    rating: 4.7,
    image: require('../assets/images/dr.jpg'),

    about: 'Friendly pediatric dentist who makes kids feel comfortable.',

    education: {
      university: 'NYU College of Dentistry',
      period: '2013 - 2017',
      degree: 'DDS',
    },

    stats: {
      patients: 110,

      satisfaction: 95,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [10, 13, 15, 18, 21, 27],
      availableTimes: ['09:00 AM', '11:00 AM', '01:00 PM', '02:30 PM'],
    },

    reviews: [],
  },

  {
    id: '5',
    name: 'Dr. David Brown',
    specialty: 'Periodontist',
    experience: 8,
    rating: 4.8,
    image: require('../assets/images/dr.jpg'),

    about: 'Specialist in gum treatment and dental implants.',

    education: {
      university: 'Columbia University Dental School',
      period: '2011 - 2015',
      degree: 'DDS',
    },

    stats: {
      patients: 130,
      satisfaction: 97,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [11, 14, 16, 20, 22, 25],
      availableTimes: ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'],
    },

    reviews: [
      {
        id: 'r1',
        name: 'Daniel P.',
        avatar: 'https://i.pravatar.cc/100?img=5',
        rating: 4,
        text: 'Very skilled and professional.',
        date: '1 month ago',
      },
    ],
  },

  {
    id: '6',
    name: 'Dr. Olivia Wilson',
    specialty: 'Endodontist',
    experience: 9,
    rating: 4.9,
    image: require('../assets/images/dr.jpg'),

    about: 'Expert in root canal therapy with modern painless methods.',

    education: {
      university: 'University of Michigan Dentistry',
      period: '2009 - 2013',
      degree: 'DDS',
    },

    stats: {
      patients: 180,
      satisfaction: 99,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [9, 12, 15, 18, 21, 24],
      availableTimes: ['09:00 AM', '10:30 AM', '01:30 PM', '03:30 PM'],
    },

    reviews: [],
  },

  {
    id: '7',
    name: 'Dr. James Taylor',
    specialty: 'Prosthodontist',
    experience: 12,
    rating: 4.9,
    image: require('../assets/images/dr.jpg'),

    about: 'Specialist in cosmetic and restorative dentistry.',

    education: {
      university: 'University of Washington Dentistry',
      period: '2006 - 2010',
      degree: 'DDS',
    },

    stats: {
      patients: 250,
      satisfaction: 99,
    },

    schedule: {
      month: 'April 2026',
      year: 2026,
      monthIndex: 3,
      availableDays: [10, 13, 17, 20, 23, 26],
      availableTimes: ['08:30 AM', '10:00 AM', '12:30 PM', '02:00 PM'],
    },

    reviews: [
      {
        id: 'r1',
        name: 'Sophia M.',
        avatar: 'https://i.pravatar.cc/100?img=6',
        rating: 5,
        text: 'Best dentist I’ve ever had!',
        date: '5 days ago',
      },
    ],
  },
];
