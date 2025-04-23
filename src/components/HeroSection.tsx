export const HeroSection = () => {
  return (
    <section className=" max-w-[1305px] p-5 mx-auto  grid grid-cols-1 sm:grid-cols-2 place-items-center gap-2 rounded-br-[200px]  text-white ">
      <div className="space-y-2">
        <h1 className=" text-3xl sm:text-[60px] sm:leading-[80px]  font-bold  ">
          Upgrade{' '}
          <span className="font-bold text-5xl sm:text-[70px]  sm:leading-[80px]">
            YOUR
          </span>{' '}
          skills for better future
        </h1>
        <p className="text-base sm:text-[22px] mt-[10px] mb-[31px] max-w-[527px]">
          Find time for better yourself! And hone your skills buying some useful
          courses!
        </p>
        <div className="mt-8 flex gap-9">
          <a
            className="rounded-[6px]  py-1.5 px-1.5 sm:py-[10px] sm:px-[25px] bg-[#FF00C7]"
            href="/"
          >
            <span className="text-base">Check Courses</span>
          </a>
          <a
            className="rounded-[6px] py-1.5 px-1.5 sm:py-[10px] sm:px-[25px] bg-transparent border-1 border-[#FFFFFF]"
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
