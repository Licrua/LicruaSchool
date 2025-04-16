import Image from 'next/image';
import poppins from '../../public/fonts/font';
import { ReactNode } from 'react';
import SecondHeader from '@/components/UI/SecondHeader';
import companyImages from '@/data/comp-part';
import Card from '@/components/UI/Card';
import { courses } from '@/data/courses';
import { features } from 'process';
import featuresData from '@/data/features';
import Arrow from '@/components/Arrow';
import BenefitsSection from '@/components/HeroSection';
import heroSections from '@/data/benefits';
import { articlesData } from '@/data/articles';

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

export const OurCourse = () => {
  return (
    <section className="px-[136px] flex flex-col justify-center mt-[90px]">
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
      <button className="flex group mt-[40px] bg-transparent btnAnimation  justify-center items-center gap-2">
        <p className="text-secondary font-normal group-hover:text-pink-500">
          Show more
        </p>
        <Arrow />
      </button>
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

export const NewsAndArticles = () => {
  return (
    <section className="bg-[url('/images/article-bg.png')] mt-[90px]  flex justify-center flex-col bg-top  bg-no-repeat">
      <h2 className="text-center mb-[40px] mt-[30px] font-semibold text-[44px] leading-[55px]">
        Our Latest news <br /> & Article
      </h2>
      <div className="flex  justify-center gap-[25px]">
        {articlesData.map((article) => (
          <article
            key={article.id}
            className="min-w-[313px] gap-[10px]  bg-[50%] max-w-[313px] bg-no-repeat bg-cover"
          >
            <img
              src={article.imageSrc}
              alt={article.imageAlt}
              className="h-[227]"
            />
            <div className="flex px-5 gap-[15px] card-box-secondary-shadow bg-white py-[15px] flex-col">
              <div className="flex gap-1.5">
                <img src={'/images/news/square.svg'} alt="square" />
                <h3 className="font-medium">{article.title}</h3>
              </div>
              <p className="font-semibold ">{article.description}</p>
              <div className="flex justify-between">
                <div className="flex gap-[5px]">
                  <img src="/images/news/calender.svg" alt="calendar" />
                  <time dateTime={article.date}>{article.date}</time>
                </div>
                <div className="flex gap-[5px]">
                  <a className="text-[#5228B6] font-semibold" href="/">
                    Read more
                  </a>
                  <img src="/images/arrow-right.svg" alt="arrow-right" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export const Main = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export const Subscribe = () => {
  return (
    <section className="flex mt-[60px] justify-evenly items-center">
      <img src="/images/subscribe.png" alt="subscribe" />
      <div className="max-w-[500px]">
        <div className="flex flex-col mb-[60px] gap-[5px]">
          <h2 className="font-medium text-[35px] text-[#5228B6] leading-[62px]">
            Subscribe to our newsletter
          </h2>
          <p>Subscribe to us to see news of about out country and so on</p>
        </div>
        <form action="">
          <label className="min-w-[500] flex min-h-[50px]">
            <input
              type="email"
              className="placeholder:text-purple-500 py-3.5  px-5 h-full card-box-secondary-shadow w-[70%]"
              placeholder="Enter your mail"
              autoComplete="true"
            />
            <button
              className="px-[39px] w-[30%]  rounded-2xl py-3 bg-[#5228B6] text-white"
              type="button"
            >
              Join Now
            </button>
          </label>
        </form>
      </div>
    </section>
  );
};

//  footer
export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-6">
      <div className="max-w-[1250px] justify-evenly mx-auto grid grid-cols-[repeat(auto-fit,_500px)]  gap-5">
        {/* Логотип и описание */}
        <div>
          <img src="/images/logo.svg" alt="Outschool logo" className="mb-4" />
          <p className="text-sm max-w-[232]   text-[#E5E5E5]">
            Thanks for your time spending on out site we are appreciate it so
            much!
          </p>
        </div>

        {/* General */}
        <div className="flex gap-[72]">
          <div>
            <h3 className="font-semibold mb-3">General</h3>
            <ul className="space-y-2 text-sm text-[#E5E5E5]">
              <li>About Us</li>
              <li>Pricing</li>
              <li>Contact Us</li>
              <li>Courses</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-3">Policies</h3>
            <ul className="space-y-2 text-sm text-[#E5E5E5]">
              <li>Security safeguards</li>
              <li>Terms of service</li>
              <li>Privacy</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="font-semibold mb-3">Get in touch</h3>
            <p className="text-sm text-[#E5E5E5] mb-4">
              Follow us on social media and stay updated with the latest
              information about our services
            </p>
            <ul className="flex gap-4">
              <li>
                <img src="/images/footer/social-media-1.svg" alt="Facebook" />
              </li>
              <li>
                <img src="/images/footer/social-media-2.svg" alt="Twitter" />
              </li>
              <li>
                <img src="/images/footer/social-media-3.svg" alt="Instagram" />
              </li>
              <li>
                <img src="/images/footer/social-media-4.svg" alt="YouTube" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-[#AAAAAA]">
        © 2022 - @OUTSCHOOL all rights reserved
      </div>
    </footer>
  );
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
          {heroSections.map((section) => (
            <BenefitsSection
              key={section.id}
              headerText={section.title}
              paragraphText={section.description}
              buttonText={section.buttonText}
              imageSrc={section.imageSrc}
              buttonColor={section.buttonColor}
              imageOrder={section.imageOrder}
            />
          ))}
          <NewsAndArticles />
          <Subscribe />
          <Footer />
        </div>
      </Main>
    </Container>
  );
}
