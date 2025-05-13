import Arrow from '@/components/Arrow';
import Pricing from '@/components/subscription/Pricing';
import SubscriptionBenefits from '@/components/subscription/SubscriptionBenefits';
import SubscriptionContainer from '@/components/subscription/SubscriptionContainer';
import SubscriptionFAQ from '@/components/subscription/SubscriptionFAQ';
import SubscriptionIntro from '@/components/subscription/SubscriptionIntro';
import SubscriptionTestimonials from '@/components/subscription/SubscriptionTestimonials';
import WhyChooseSubscription from '@/components/subscription/WhySubscription';
import CancelSubscription from '@/components/subscription/CancelSubscription';

function SubscriptionPage() {
  return (
    <SubscriptionContainer>
      <Arrow />
      <SubscriptionIntro />
      <Pricing />
      <CancelSubscription />
      <WhyChooseSubscription />
      <SubscriptionBenefits />
      <SubscriptionTestimonials />
      <SubscriptionFAQ />
    </SubscriptionContainer>
  );
}

export default SubscriptionPage;
