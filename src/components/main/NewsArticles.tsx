import { articlesData } from '@/data/articles';
import Image from 'next/image';

const NewsArticles = ({
	id,
	imageSrc,
	imageAlt,
	title,
	description,
	date,
	site,
}: articlesData) => {
	return (
    <>
      <article
        key={id}
        className="flex flex-col  gap-[10px] h-full p-12 md:p-0 min-w-[313px] max-[550px] md:max-w-[350px] bg-[50%] bg-no-repeat bg-cover "
      >
        <Image
          width={270}
          height={0}
          src={imageSrc}
          alt={imageAlt}
          className="h-max-[227px] w-full object-cover"
        />
        <div className="flex flex-col  gap-[15px] bg-white py-[15px] px-5 card-box-secondary-shadow">
          <div className="flex gap-1.5 items-center">
            <Image
              width={20}
              height={20}
              src="/images/news/square.svg"
              alt="square icon"
            />
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="flex ">
            <p className="font-semibold  line-clamp-3">{description}</p>
          </div>
          <div className="flex  justify-between items-center">
            <div className="flex items-center gap-[5px]">
              <img src="/images/news/calender.svg" alt="calendar icon" />
              <time dateTime={date}>{date}</time>
            </div>
            <div className="flex  items-center gap-[5px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5228B6] flex gap-2 font-semibold"
                href={site}
              >
                Read more
                <Image
                  width={15}
                  height={15}
                  src="/images/arrow-right.svg"
                  alt="arrow right icon"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NewsArticles;
