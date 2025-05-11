'use client';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '../Slider';
import TestimonialCard from '../UI/TestimonialCard';

function SubscriptionTestimonials() {
  return (
    <section className="py-16 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        What our users say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Slider>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://randomuser.me/api/portraits/men/32.jpg"
              altText="Alex, Product Manager"
              text="Switching to Pro saved us hours every week. The insights are game-changing."
              author="Alexander, Product Manager"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://randomuser.me/api/portraits/women/44.jpg"
              altText="Maria, Developer"
              text="The support team is lightning-fast. Worth every penny!"
              author="Maria, Developer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://randomuser.me/api/portraits/men/45.jpg"
              altText="John, Designer"
              text="The tools provided by this subscription are unmatched. Highly recommend!"
              author="Sasha, Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://randomuser.me/api/portraits/women/68.jpg"
              altText="Sophia, Entrepreneur"
              text="This subscription has transformed the way I manage my business."
              author="Sophia, Entrepreneur"
            />
          </SwiperSlide>
        </Slider>
      </div>
    </section>
  );
}

export default SubscriptionTestimonials;
