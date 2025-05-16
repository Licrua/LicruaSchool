'use client';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import Arrow from '@/components/Arrow';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import HistorySection from '@/components/about/HistorySection';
import ContactSection from '@/components/about/ContactSection';
import DescriptionMissionSection from '@/components/about/DescriptionMissionSection';

function AboutUs() {
  interface TeamMember {
    name: string;
    photo: string;
    role: string;
    bio: string;
  }

  interface HistoryItem {
    year: string;
    event: string;
  }

  interface Contact {
    email: string;
    phone: string;
    address: string;
  }

  interface Social {
    facebook: string;
    twitter: string;
    linkedin: string;
  }

  interface AboutUsData {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    values: string[];
    team: TeamMember[];
    history: HistoryItem[];
    contact: Contact;
    social: Social;
  }

  const [data, setData] = useState<AboutUsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(
          'https://api.jsonbin.io/v3/b/6824e21c8960c979a599874e',
          {
            headers: {
              'X-Master-Key':
                '$2a$10$6tvyNhCxOm0AK.h7AyjXYO3Ze3iJkkcSKJt1l2WyH9cvQVmAkRW3y',
            },
          }
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();
        setData(json.record);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        );
      }
    };

    dataFetch();
  }, []);

  if (error)
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  if (!data) return <Loading />;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-16">
      <Arrow />
      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-primary drop-shadow-lg">
          {data.title}
        </h1>
        <p className="text-xl text-gray-500 italic">{data.subtitle}</p>
      </div>
      <DescriptionMissionSection
        description={data.description}
        mission={data.mission}
      />
      <ValuesSection values={data.values} />
      <TeamSection team={data.team} />
      <HistorySection history={data.history} />
      <ContactSection contact={data.contact} />
    </div>
  );
}

export default AboutUs;
