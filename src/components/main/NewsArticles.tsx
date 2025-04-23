import { articlesData } from '@/data/articles';

const NewsArticles = ({
  id,
  imageSrc,
  imageAlt,
  title,
  description,
  date,
}: articlesData) => {
  return (
    <>
      <article
        key={id}
        className="flex flex-col  gap-[10px] p-12 md:p-0 min-w-[313px] max-[550px] md:max-w-[350px] bg-[50%] bg-no-repeat bg-cover "
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-[227px] w-full object-cover"
        />
        <div className="flex flex-col gap-[15px] bg-white py-[15px] px-5 card-box-secondary-shadow">
          <div className="flex gap-1.5 items-center">
            <img src="/images/news/square.svg" alt="square icon" />
            <h3 className="font-medium">{title}</h3>
          </div>
          <p className="font-semibold">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[5px]">
              <img src="/images/news/calender.svg" alt="calendar icon" />
              <time dateTime={date}>{date}</time>
            </div>
            <div className="flex items-center gap-[5px]">
              <a className="text-[#5228B6] font-semibold" href={'/'}>
                Read more
              </a>
              <img src="/images/arrow-right.svg" alt="arrow right icon" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NewsArticles;
