import { FooterLinks } from "@/data/footerLinks";

const FooterGeneralLinks = () => {
  return (
    <div>
      <h3 className="font-semibold mb-3">General</h3>
      <ul className="space-y-2 text-sm text-[#E5E5E5]">
        {FooterLinks.map((link) => (
          <li key={link.id}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterGeneralLinks;
