export interface articlesData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
	date: string;
	site: string;
}

export const articlesData: articlesData[] = [
  {
    id: 'web-development-card',
    title: 'Web Development',
    description:
      'Learn the latest trends in web development, from front-end technologies to back-end frameworks.',
    imageSrc: '/images/articles/article-1.png',
    imageAlt: 'Web Development',
    date: '2025-04-10',
    site: 'https://web.dev/case-studies/vitals-web-development?hl=en',
  },
  {
    id: 'business-card',
    title: 'Business',
    description:
      'Explore how businesses are leveraging technology to grow, improve operations, and enhance customer experience.',
    imageSrc: '/images/articles/article-2.png',
    imageAlt: 'Business',
    date: '2025-04-12',
    site: 'https://web.dev/case-studies/vitals-business-impact?hl=en',
  },
  {
    id: 'technology-card',
    title: 'Technology',
    description:
      'Stay updated on the latest breakthroughs in technology, from AI to blockchain and beyond.',
    imageSrc: '/images/articles/article-3.png',
    imageAlt: 'Technology',
    date: '2025-04-15',
    site: 'https://web.dev/explore/ai?hl=en',
  },
];
