export type Course = {
  id: number;
  category: string;
  title: string;
  author: string;
  abbreviation: string;
  rating: number;
  price: number;
  image: string;
};

export const courses: Course[] = [
  {
    id: 1,
    category: 'Artificial Intelligence',
    abbreviation: 'AI',
    title: 'Modern Artificial Intelligence with zero coding',
    author: 'Jhon David',
    rating: 4.8,
    price: 39.99,
    image: '/images/cards/Rectangle 1085.png',
  },
  {
    id: 2,
    category: 'UX/UI Designing',
    abbreviation: 'Design',
    title: 'Figma UX/UI Design essentials',
    author: 'Daniel Walter Scott',
    rating: 4.7,
    price: 45.0,
    image: '/images/cards/Rectangle 1086.png',
  },
  {
    id: 3,
    category: 'UX/UI Designing',
    abbreviation: 'Design',
    title: 'Complete figma mega course: UX/UI Design Beginner to Expert',
    author: 'Kaleb Kingston',
    rating: 4.9,
    price: 59.99,
    image: '/images/cards/Rectangle 1087.png',
  },
  {
    id: 4,
    category: 'Web Development',
    abbreviation: 'Development',
    title: 'The Complete 2022 Fullstack Web Developer course',
    author: 'Mark Lassoff',
    rating: 4.6,
    price: 42.5,
    image: '/images/cards/Rectangle 1088.png',
  },
  {
    id: 5,
    category: 'Web Development',
    abbreviation: 'Development',
    title: 'Javascript for beginners',
    author: 'Jhon David',
    rating: 4.5,
    price: 29.99,
    image: '/images/cards/Rectangle 1089.png',
  },
  {
    id: 6,
    category: 'Digital Marketing',
    abbreviation: 'Marketing',
    title: 'Digital Advertising and Marketing 101: The Complete...',
    author: 'Ben Silverstain',
    rating: 4.9,
    price: 49.99,
    image: '/images/cards/Rectangle 1090.png',
  },
  {
    id: 7,
    category: 'Digital Marketing',
    abbreviation: 'Marketing',
    title: 'Mega Digital Marketing course: 12 Courses in 1',
    author: 'Phil Ebiner',
    rating: 4.6,
    price: 34.99,
    image: '/images/cards/Rectangle 1091.png',
  },
  {
    id: 8,
    category: 'UX/UI Designing',
    abbreviation: 'Design',
    title: 'User Experience Design Essentials',
    author: 'Jacob Murphy',
    rating: 5.0,
    price: 55.0,
    image: '/images/cards/Rectangle 1092.png',
	},
];
