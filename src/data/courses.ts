export type Course = {
  id: number;
  category: string;
  title: string;
  author: string;
  abbreviation: string;
  rating: number;
  price: number;
  image: string;
  info?: {
    description: string;
    duration: string;
    level: string;
    language: string;
    audience: string;
    highlights: string;
  };
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
    info: {
      description:
        'Learn the fundamentals of Artificial Intelligence without any prior coding experience. This course is perfect for beginners who want to understand AI concepts and their applications in real-world scenarios.',
      duration: '2 weeks',
      level: 'Beginner',
      language: 'English',
      audience: 'Anyone interested in AI but with no coding background.',
      highlights:
        'Covers AI basics, real-world applications, and hands-on projects.',
    },
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
    info: {
      description:
        'Master the essentials of UX/UI design using Figma. This course covers the basics of design principles, prototyping, and creating user-friendly interfaces.',
      duration: '2 months',
      level: 'Intermediate',
      language: 'English',
      audience: 'Aspiring UX/UI designers and product managers.',
      highlights: 'Focuses on Figma tools, prototyping, and design workflows.',
    },
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
    info: {
      description:
        'A comprehensive course that takes you from beginner to expert in UX/UI design using Figma. Learn advanced techniques and best practices for creating professional designs.',
      duration: '4 weeks',
      level: 'Advanced',
      language: 'English',
      audience: 'Experienced designers looking to master Figma.',
      highlights:
        'Includes advanced techniques, real-world projects, and expert tips.',
    },
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
    info: {
      description:
        'Become a full-stack web developer with this complete course. Learn front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming.',
      duration: '6 months',
      level: 'All Levels',
      language: 'English',
      audience: 'Aspiring web developers and software engineers.',
      highlights:
        'Covers both front-end and back-end development with hands-on projects.',
    },
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
    info: {
      description:
        'Learn JavaScript from scratch with this beginner-friendly course. Understand the basics of programming and start building interactive web applications.',
      duration: '2 months',
      level: 'Beginner',
      language: 'English',
      audience: 'Beginners with no prior programming experience.',
      highlights: 'Focuses on JavaScript fundamentals and practical examples.',
    },
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
    info: {
      description:
        'A complete guide to digital advertising and marketing. Learn how to create effective campaigns, analyze data, and optimize your marketing strategies.',
      duration: '5 months',
      level: 'Intermediate',
      language: 'English',
      audience:
        'Marketers and business owners looking to improve their digital presence.',
      highlights: 'Covers SEO, PPC, social media marketing, and analytics.',
    },
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
    info: {
      description:
        'A mega course that combines 12 digital marketing courses into one. Learn SEO, social media marketing, email marketing, and more.',
      duration: '1 year',
      level: 'All Levels',
      language: 'English',
      audience: 'Anyone interested in mastering digital marketing.',
      highlights:
        'Includes 12 courses in one, covering all major marketing channels.',
    },
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
    info: {
      description:
        'Learn the essentials of user experience design. This course covers user research, wireframing, prototyping, and usability testing.',
      duration: '2 months',
      level: 'Beginner',
      language: 'English',
      audience: 'Beginners and product managers interested in UX design.',
      highlights:
        'Focuses on user research, usability testing, and prototyping.',
    },
  },
];
