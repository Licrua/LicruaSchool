import { articlesData } from '@/data/articles';
import { Slider } from '../Slider';
import NewsArticles from './NewsArticles';
import { SwiperSlide } from 'swiper/react';

export const NewsAndArticles = () => {
  return (
    <section className="bg-[url('/images/article-bg.png')] mt-[90px]  flex justify-center flex-col bg-top  bg-no-repeat">
      <h2 className="text-center mb-[40px] mt-[30px] font-semibold text-[30px] sm:text-[44px] leading-[55px]">
        Our Latest news <br /> & Article
      </h2>
      {/* mobile */}
      <div className="flex justify-center md:hidden ">
        <Slider>
          {articlesData.map((item) => (
            <SwiperSlide key={item.id} className="!flex !justify-center">
              <NewsArticles {...item} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      {/* dekstop */}
      <div className="hidden md:flex justify-center gap-[25px] flex-wrap ">
        {articlesData.map((item) => (
          <NewsArticles key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
