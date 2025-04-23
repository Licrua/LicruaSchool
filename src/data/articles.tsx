export interface articlesData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
}

export const articlesData: articlesData[] = [
  {
    id: 'web-development-card',
    title: 'Web Development',
    description:
      'Learn the latest trends in web development, from front-end technologies to back-end frameworks.',
    imageSrc: '/images/articles/article-1.png',
    imageAlt: 'Web Development',
    date: '2023-04-10',
  },
  {
    id: 'business-card',
    title: 'Business',
    description:
      'Explore how businesses are leveraging technology to grow, improve operations, and enhance customer experience.',
    imageSrc: '/images/articles/article-2.png',
    imageAlt: 'Business',
    date: '2023-04-12',
  },
  {
    id: 'technology-card',
    title: 'Technology',
    description:
      'Stay updated on the latest breakthroughs in technology, from AI to blockchain and beyond.',
    imageSrc: '/images/articles/article-3.png',
    imageAlt: 'Technology',
    date: '2023-04-15',
  },
];
