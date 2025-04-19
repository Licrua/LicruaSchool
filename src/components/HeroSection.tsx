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
          Find time for better yourself! And hone your skills buying some useful
          courses!
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
