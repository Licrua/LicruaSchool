import PricingCard from '@/components/subscription/PricingCard';
import { basicTarif, proTariff } from '@/data/pricing';

function Pricing() {
  return (
    <section className='flex flex-col items-center justify-center max-w-5xl mx-auto p-6'>
      <h2 className="text-5xl font-extrabold leading-tight tracking-wider mt-3.5 text-center">
        Subscription Plan
      </h2>
	<div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white max-w-[450px] p-6 rounded-lg mt-6 text-center shadow-lg transform  transition-transform duration-300">
	  <p className="text-lg font-medium">✨ Limited Time Offer! ✨</p>
	  <strong className="block text-2xl font-bold mt-2">Choose Any Subscription Plan</strong>
	  <p className="mt-2 text-sm">Get access within 7 days for free</p>
	</div>
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
    </section>
  );
}

export default Pricing;
