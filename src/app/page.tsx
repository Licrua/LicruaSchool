import Image from 'next/image';
import poppins from '../../public/fonts/font';
import { ReactNode } from 'react';
import SecondHeader from '@/components/UI/SecondHeader';
import companyImages from '@/data/comp-part';
import Card from '@/components/UI/Card';

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
    <section>
      <SecondHeader position="center" text={'Our Company and Partners'} />
      <CompanyAndPartnersIcons />
    </section>
  );
};

//

export const OurCourse = () => {
  return (
    <section>
      <SecondHeader position="left" text={'Our Courses'} />
      <nav aria-label="Course Categories">
        <ul>
          <li>
            <a href="#top-rated">Top Rated</a>
          </li>
          <li>
            <a href="#development">Development</a>
          </li>
          <li>
            <a href="#design">Design</a>
          </li>
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#marketing">Marketing</a>
          </li>
          <li>
            <a href="#business">Business</a>
          </li>
          <li>
            <a href="#photography">Photography</a>
          </li>
        </ul>
      </nav>
      <div>
        <Card />
        {/* <article>
          <div>
            <img
              src="/images/cards/Rectangle 1085.png"
              alt="Artificial Intelligence course"
            />
          </div>
          <div>
            <h3>Artificial Intelligence</h3>
            <p>Modern Artificial Intelligence with zero coding</p>
            <small>Jhon David</small>
            <div aria-live="polite">
              <ul>
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index} aria-label={`Rating ${index + 1} star`}>
                    <span role="img" aria-label="star">
                      &#9733;
                    </span>
                  </li>
                ))}
              </ul>
              <span>4.9</span>
            </div>
            <div>
              <p>$ 49.99</p>
              <button>Buy now</button>
            </div>
          </div>
        </article> */}
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
        </div>
      </Main>
    </Container>
  );
}
