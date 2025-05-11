import socialLinks from '@/data/socialLinks';
import Image from 'next/image';

export default function FooterSocialLinks() {
  return (
    <div id="contactUs">
      <ul className="flex gap-4">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Image
                className={
                  link.id === 'github' ? 'bg-white p-2 rounded-2xl' : ''
                }
                width={50}
                height={50}
                src={link.img}
                alt={link.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
