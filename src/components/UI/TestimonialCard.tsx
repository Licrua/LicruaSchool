import Image from 'next/image';

interface TestimonialCardProps {
  imageSrc: string;
  altText: string;
  text: string;
  author: string;
}

function TestimonialCard({
  imageSrc,
  altText,
  text,
  author,
}: TestimonialCardProps) {
  return (
    <blockquote className="p-6 bg-base-200 rounded-lg flex flex-col items-center">
      <Image
        width={64}
        height={64}
        src={imageSrc}
        alt={altText}
        className="rounded-full mb-4"
      />
      <p className="text-center">{text}</p>
      <footer className="mt-4 text-sm text-base-content/70">— {author}</footer>
    </blockquote>
  );
}

export default TestimonialCard;
