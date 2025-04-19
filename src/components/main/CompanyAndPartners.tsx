import SecondHeader from "../UI/SecondHeader";
import { CompanyAndPartnersIcons } from "./CompanyAndPartnersIcons";

export const CompanyAndPartners = () => {
  return (
    <section className="pt-10 flex flex-col gap-[53px]">
      <SecondHeader position="center" text={'Our Company and Partners'} />
      <CompanyAndPartnersIcons />
    </section>
  );
};
