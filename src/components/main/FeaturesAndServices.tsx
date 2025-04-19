import featuresData from "@/data/features";
import SecondHeader from "../UI/SecondHeader";
import { FeatureAndServicesCard } from "./FeatureAndServicesCard";

export const FeaturesAndServices = () => {
  return (
    <section className="flex flex-col mt-10 items-center gap-14">
      <div className="flex flex-col items-center justify-center max-w-[673px] gap-2.5">
        <SecondHeader text="Our Features and Services" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis
          aliquet purus sem ornare mollis vulputate. Sapien purus faucibus massa
          pharetra.{' '}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[50px]">
        {featuresData.map((feature) => (
          <FeatureAndServicesCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
