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
