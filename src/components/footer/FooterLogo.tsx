import Image from 'next/image';

const FooterLogo = () => {
  return (
    <div>
      <Image
        width={100}
        height={100}
        src="/images/logo.svg"
        alt="licrua school"
        className="mb-4"
      />
      <p className="text-sm max-w-[232]   text-[#E5E5E5]">
        Thanks for your time spending on out site we are appreciate it so much!
      </p>
    </div>
  );
};

export default FooterLogo;
