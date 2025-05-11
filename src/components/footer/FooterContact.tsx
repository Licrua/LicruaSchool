import FooterSocialLinks from './FooterSocialLinks';

const FooterContact = () => {
  return (
    <address className="max-w-[300px]">
      <h3 className="font-semibold mb-3">Get in touch</h3>
      <p className="text-sm text-[#E5E5E5] mb-4">
        Follow us on social media and stay updated with the latest information
        about our services
      </p>
      <FooterSocialLinks />
    </address>
  );
};

export default FooterContact;
