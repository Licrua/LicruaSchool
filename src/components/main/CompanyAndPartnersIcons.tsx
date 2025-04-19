import companyImages from "@/data/comp-part";

export const CompanyAndPartnersIcons = () => {
  return (
    <div className="flex justify-center gap-[100px]">
      {companyImages.map((item) => (
        <img key={item.id} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};
