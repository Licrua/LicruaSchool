import Image from "next/image";

type Feature = {
  id?: number;
  title: string;
  description: string;
  src: string;
};

export const FeatureAndServicesCard = ({
  title,
  description,
  src,
}: Feature) => {
  return (
	<article className="flex flex-col items-start gap-3 max-w-[270px]">
	  <Image src={src} alt={title} width={33} height={33} />
	  <h3 className="font-medium text-xl">{title}</h3>
	  <p className=" text-gray-600">{description}</p>
	</article>
  );
};