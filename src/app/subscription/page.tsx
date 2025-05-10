

import PricingCard from '@/components/subscription/PricingCard';
import { basicTarif, proTariff } from '@/data/pricing';

function Pricing() {
  return (
    <div>
      <h1 className="text-5xl leading-tight tracking-wider mt-3.5 text-center">
        Subscription pricing
      </h1>
      <div className="grid lg:grid-cols-2 justify-items-center gap-10 mx-auto  text-zinc-800 mt-10">
        <PricingCard
          title="Basic Plan"
          description="Ideal for individuals just getting started"
          price="$19"
          features={basicTarif}
          buttonLabel="Choose Basic"
        />
        <PricingCard
          title="Pro Plan"
          description="Best for professionals who need advanced features"
          price="$49"
          period="/month"
          features={proTariff}
          buttonLabel="Choose Pro"
          highlighted={true}
          badgeText="Popular"
        />
      </div>
    </div>
  );
}

export default Pricing;
