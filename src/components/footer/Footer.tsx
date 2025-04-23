export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-6">
      <div className="max-w-[1250px]  mx-auto grid grid-cols-1 md:grid-cols-2   gap-5">
        {/* Логотип и описание */}
        <div>
          <img src="/images/logo.svg" alt="Outschool logo" className="mb-4" />
          <p className="text-sm max-w-[232]   text-[#E5E5E5]">
            Thanks for your time spending on out site we are appreciate it so
            much!
          </p>
        </div>

        {/* General */}
        <div className="flex flex-col gap-10  md:flex-row md:gap-[72]">
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
