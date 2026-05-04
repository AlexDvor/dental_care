import { DoctorType } from '../interfaces/doctor.types';

export const DOCTORS: DoctorType[] = [
  {
    id: 'doc1',
    name: 'Dr. John Smith',
    specialty: 'Orthodontist',
    experience: 7,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&h=500&fit=crop',

    about: 'Specialist in modern orthodontics including Invisalign and braces.',

    education: {
      university: 'Harvard School of Dental Medicine',
      period: '2010 - 2014',
      degree: 'DMD',
    },

    stats: { patients: 120, satisfaction: 98 },

    workingHours: { start: '09:00', end: '17:00' },
    slotDuration: 60,

    reviews: [
      {
        id: 'doc1-r1',
        name: 'Emily R.',
        avatar: 'https://i.pravatar.cc/100?img=1',
        rating: 5,
        text: 'Amazing experience, very professional and friendly.',
        date: '2 weeks ago',
      },
      {
        id: 'doc1-r2',
        name: 'Michael T.',
        avatar: 'https://i.pravatar.cc/100?img=2',
        rating: 5,
        text: 'The treatment was painless and results exceeded expectations.',
        date: '1 month ago',
      },
      {
        id: 'doc1-r3',
        name: 'Sophia L.',
        avatar: 'https://i.pravatar.cc/100?img=3',
        rating: 4,
        text: 'Great doctor, but scheduling could be faster.',
        date: '3 weeks ago',
      },
      {
        id: 'doc1-r4',
        name: 'Daniel K.',
        avatar: 'https://i.pravatar.cc/100?img=4',
        rating: 5,
        text: 'Highly recommend! Very attentive and skilled.',
        date: '5 days ago',
      },
    ],
  },

  {
    id: 'doc2',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Dentist',
    experience: 5,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop',

    about: 'Focused on preventive care and patient comfort.',

    education: {
      university: 'Stanford Dental School',
      period: '2012 - 2016',
      degree: 'DDS',
    },

    stats: { patients: 90, satisfaction: 96 },

    workingHours: { start: '08:30', end: '16:30' },
    slotDuration: 30,

    reviews: [
      {
        id: 'doc2-r1',
        name: 'Anna K.',
        avatar: 'https://i.pravatar.cc/100?img=5',
        rating: 5,
        text: 'Very gentle, felt completely comfortable.',
        date: '1 week ago',
      },
      {
        id: 'doc2-r2',
        name: 'James P.',
        avatar: 'https://i.pravatar.cc/100?img=6',
        rating: 4,
        text: 'Good experience overall, clean clinic.',
        date: '2 weeks ago',
      },
      {
        id: 'doc2-r3',
        name: 'Laura M.',
        avatar: 'https://i.pravatar.cc/100?img=7',
        rating: 5,
        text: 'Explained everything clearly, very professional.',
        date: '3 weeks ago',
      },
    ],
  },

  {
    id: 'doc3',
    name: 'Dr. Michael Lee',
    specialty: 'Oral Surgeon',
    experience: 10,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=500&fit=crop',

    about: 'Expert in oral surgery and implants.',

    education: {
      university: 'UCLA Dentistry',
      period: '2008 - 2012',
      degree: 'DDS',
    },

    stats: { patients: 200, satisfaction: 99 },

    workingHours: { start: '10:00', end: '18:00' },
    slotDuration: 60,

    reviews: [
      {
        id: 'doc3-r1',
        name: 'Kevin D.',
        avatar: 'https://i.pravatar.cc/100?img=8',
        rating: 5,
        text: 'Surgery went perfectly, no complications.',
        date: '2 months ago',
      },
      {
        id: 'doc3-r2',
        name: 'Olivia S.',
        avatar: 'https://i.pravatar.cc/100?img=9',
        rating: 5,
        text: 'Very confident and skilled surgeon.',
        date: '1 month ago',
      },
      {
        id: 'doc3-r3',
        name: 'Brian T.',
        avatar: 'https://i.pravatar.cc/100?img=10',
        rating: 4,
        text: 'Professional, but consultation felt a bit rushed.',
        date: '3 weeks ago',
      },
    ],
  },

  {
    id: 'doc4',
    name: 'Dr. Emily Davis',
    specialty: 'Pediatric Dentist',
    experience: 6,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1584467735871-1f3a5c9f1f5c?w=500&h=500&fit=crop',

    about: 'Friendly pediatric dentist for kids.',

    education: {
      university: 'NYU College of Dentistry',
      period: '2013 - 2017',
      degree: 'DDS',
    },

    stats: { patients: 110, satisfaction: 95 },

    workingHours: { start: '09:00', end: '15:00' },

    slotDuration: 30,

    reviews: [
      {
        id: 'doc4-r1',
        name: 'Parent A.',
        avatar: 'https://i.pravatar.cc/100?img=11',
        rating: 5,
        text: 'My child felt safe and happy during the visit.',
        date: '2 weeks ago',
      },
      {
        id: 'doc4-r2',
        name: 'Parent B.',
        avatar: 'https://i.pravatar.cc/100?img=12',
        rating: 4,
        text: 'Very friendly, but waiting area was crowded.',
        date: '1 month ago',
      },
      {
        id: 'doc4-r3',
        name: 'Parent C.',
        avatar: 'https://i.pravatar.cc/100?img=13',
        rating: 5,
        text: 'Excellent with kids, highly recommend.',
        date: '5 days ago',
      },
    ],
  },

  {
    id: 'doc5',
    name: 'Dr. David Brown',
    specialty: 'Periodontist',
    experience: 8,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop',

    about: 'Gum disease specialist and implant expert.',

    education: {
      university: 'Columbia University',
      period: '2011 - 2015',
      degree: 'DDS',
    },

    stats: { patients: 130, satisfaction: 97 },

    workingHours: { start: '09:00', end: '17:00' },

    slotDuration: 45,

    reviews: [
      {
        id: 'doc5-r1',
        name: 'Daniel P.',
        avatar: 'https://i.pravatar.cc/100?img=14',
        rating: 5,
        text: 'Very knowledgeable and professional.',
        date: '3 weeks ago',
      },
      {
        id: 'doc5-r2',
        name: 'Rachel W.',
        avatar: 'https://i.pravatar.cc/100?img=15',
        rating: 4,
        text: 'Good results, but treatment took longer than expected.',
        date: '1 month ago',
      },
      {
        id: 'doc5-r3',
        name: 'Steve H.',
        avatar: 'https://i.pravatar.cc/100?img=16',
        rating: 5,
        text: 'Excellent care and attention to detail.',
        date: '2 weeks ago',
      },
    ],
  },

  {
    id: 'doc6',
    name: 'Dr. Olivia Wilson',
    specialty: 'Endodontist',
    experience: 9,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&h=500&fit=crop',

    about: 'Root canal specialist with painless techniques.',

    education: {
      university: 'University of Michigan',
      period: '2009 - 2013',
      degree: 'DDS',
    },

    stats: { patients: 180, satisfaction: 99 },

    workingHours: { start: '10:00', end: '18:00' },
    slotDuration: 60,

    reviews: [
      {
        id: 'doc6-r1',
        name: 'Linda G.',
        avatar: 'https://i.pravatar.cc/100?img=17',
        rating: 5,
        text: 'Root canal was surprisingly painless.',
        date: '2 weeks ago',
      },
      {
        id: 'doc6-r2',
        name: 'Mark R.',
        avatar: 'https://i.pravatar.cc/100?img=18',
        rating: 5,
        text: 'Very calm and professional approach.',
        date: '1 month ago',
      },
      {
        id: 'doc6-r3',
        name: 'Nina K.',
        avatar: 'https://i.pravatar.cc/100?img=19',
        rating: 4,
        text: 'Good doctor, but appointment was delayed.',
        date: '3 weeks ago',
      },
    ],
  },

  {
    id: 'doc7',
    name: 'Dr. James Taylor',
    specialty: 'Prosthodontist',
    experience: 12,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=500&h=500&fit=crop',

    about: 'Cosmetic and restorative dentistry expert.',

    education: {
      university: 'University of Washington',
      period: '2006 - 2010',
      degree: 'DDS',
    },

    stats: { patients: 250, satisfaction: 99 },

    workingHours: { start: '08:00', end: '16:00' },
    slotDuration: 60,

    reviews: [
      {
        id: 'doc7-r1',
        name: 'Sophia M.',
        avatar: 'https://i.pravatar.cc/100?img=20',
        rating: 5,
        text: 'Best dentist I’ve ever had!',
        date: '5 days ago',
      },
      {
        id: 'doc7-r2',
        name: 'Chris B.',
        avatar: 'https://i.pravatar.cc/100?img=21',
        rating: 5,
        text: 'Perfect results, very happy.',
        date: '2 weeks ago',
      },
      {
        id: 'doc7-r3',
        name: 'Angela D.',
        avatar: 'https://i.pravatar.cc/100?img=22',
        rating: 4,
        text: 'Great service, but a bit expensive.',
        date: '1 month ago',
      },
    ],
  },
];
