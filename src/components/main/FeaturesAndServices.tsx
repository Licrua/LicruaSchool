import featuresData from '@/data/features';
import SecondHeader from '../UI/SecondHeader';
import { FeatureAndServicesCard } from './FeatureAndServicesCard';

export const FeaturesAndServices = () => {
  return (
    <section className="flex p-5 flex-col mt-10 items-center gap-14">
      <div className="flex flex-col items-center justify-center max-w-[673px] gap-2.5">
        <SecondHeader text="Our Features and Services" />
        <p>
          Discover a range of powerful tools designed to enhance your learning
          experience. Our expert team ensures you get the support you need every
          step of the way. With reliable services and modern solutions, success
          is just a click away.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[50px]">
        {featuresData.map((feature) => (
          <FeatureAndServicesCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
