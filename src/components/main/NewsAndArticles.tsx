import { articlesData } from "@/data/articles";

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