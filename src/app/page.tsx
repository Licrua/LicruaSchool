import Image from 'next/image';
import poppins from '../../public/fonts/font';
import { ReactNode } from 'react';
import SecondHeader from '@/components/UI/SecondHeader';
import companyImages from '@/data/comp-part';
import Card from '@/components/UI/Card';
import { courses } from '@/data/courses';
import { features } from 'process';
import featuresData from '@/data/features';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`max-w-[1440px] ${poppins.className}  mx-auto bg-gradient`}>
      {children}
    </div>
  );
};

//
export const Header = () => {
  return (
    <header className="flex pop px-[50px]  py-[35px] text-white  justify-between font-medium leading-[100%]">
      <Image
        priority
        src={'/images/logo.svg'}
        alt="logo"
        width={146}
        height={17}
      />
      <nav>
        <ul className="flex gap-[30px] ">
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-[30px]">
        <div className="flex gap-[7px]">
          <img src="/images/user.svg" alt="account" />
          <span>Account</span>
        </div>
        <div className="flex gap-[7px]">
          <img src="/images/cart.svg" alt="cart" />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

// MAIN

export const HeroSection = () => {
  return (
    <section className=" max-w-[1305px] mx-auto  grid grid-cols-2 place-items-center rounded-br-[200px]  text-white ">
      <div>
        <h1 className="text-[60px] leading-[80px]  font-bold  ">
          Upgrade{' '}
          <span className="font-bold text-[70px]  leading-[80px]">YOUR</span>{' '}
          skills for better future
        </h1>
        <p className="text-[22px] mt-[10px] mb-[31px] max-w-[527px]">
          Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit
          interdum mi felis laoreet sagittis.
          {/* Find time for better yourself! And hone your skills! */}
        </p>
        <div className="mt-8 flex gap-4">
          <a
            className="rounded-[6px] py-[10px] px-[25px] bg-[#FF00C7]"
            href="/"
          >
            Check Courses
          </a>
          <a
            className="rounded-[6px] py-[10px] px-[25px] bg-transparent border-1 border-[#FFFFFF]"
            href="/"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Правая часть */}
      <div className="mb-[180px]">
        <img
          src="/images/hero-character.png"
          alt="Person working on a computer"
        />
      </div>
    </section>
  );
};
//  candp
export const CompanyAndPartnersIcons = () => {
  return (
    <div className="flex justify-center gap-[100px]">
      {companyImages.map((item) => (
        <img key={item.id} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
};

export const CompanyAndPartners = () => {
  return (
    <section className="pt-10 flex flex-col gap-[53px]">
      <SecondHeader position="center" text={'Our Company and Partners'} />
      <CompanyAndPartnersIcons />
    </section>
  );
};

//

export const OurCourse = () => {
  return (
    <section className="px-[136px] mt-[90px]">
      <SecondHeader position="left" text={'Our Courses'} />
      <nav aria-label="Course categories">
        <ul className="flex items-center mt-5 mb-[59px] gap-6">
          <li>
            <button className="text-purple-700 font-bold underline underline-offset-[6px]">
              Top Rated
            </button>
          </li>
          <li>
            <button className="text-gray-600">Development</button>
          </li>
          <li>
            <button className="text-gray-600">Design</button>
          </li>
          <li>
            <button className="text-gray-600">Music</button>
          </li>

          <li>
            <button className="text-gray-600">Marketing</button>
          </li>
          <li>
            <button className="text-gray-600">Business</button>
          </li>
          <li>
            <button className="text-gray-600">Photography</button>
          </li>
        </ul>
      </nav>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_277px))] w-full  justify-center content- gap-y-[50px] gap-x-5">
        {courses.map((course) => (
          <Card key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
};

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
export const FeaturesAndServices = () => {
  return (
    <section className='flex flex-col mt-10 items-center gap-14'>
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

export const Main = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <HeroSection />
        <div className="bg-white">
          <CompanyAndPartners />
          <OurCourse />
          <FeaturesAndServices />
        </div>
      </Main>
    </Container>
  );
}
