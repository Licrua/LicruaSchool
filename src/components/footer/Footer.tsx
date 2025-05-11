import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';
import FooterGeneralLinks from './FooterGeneralLinks';
import FooterLogo from './FooterLogo';

export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-6">
      <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <FooterLogo />
        <FooterGeneralLinks />
        <FooterContact />
      </div>
      <FooterCopyright />
    </footer>
  );
};
