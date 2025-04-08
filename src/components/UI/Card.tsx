// function Card() {
//   return (
//     <article className="max-w-[277px] flex  flex-col card-box-shadow rounded-2xl bg-white">
//       <div>
//         <img
//           className="w-full rounded-2xl"
//           src="/images/cards/Rectangle 1085.png"
//           alt="Artificial Intelligence course"
//         />
//       </div>
//       <div className="flex px-5 py-5 flex-col gap-3">
//         <h3 className="bg-[#EAEAEA]  text-xs rounded-md max-w-[155px] py-[7px] font-medium px-4">
//           Artificial Intelligence
//         </h3>
//         <p className="font-semibold text-sm leading-5 max-w-[228px]">
//           Modern Artificial Intelligence with zero coding
//         </p>
//         <small>Jhon David</small>
//         <div  aria-live="polite">
//           <ul className="flex">
//             {Array.from({ length: 5 }, (_, index) => (
//               <li key={index} aria-label={`Rating ${index + 1} star`}>
//                 <span
//                   role="img"
//                   className="text-[#EBE100] text-sm"
//                   aria-label="star"
//                 >
//                   &#9733;
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <span  className="flex font-semibold">4.9</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <p className="font-bold text-secondary  text-xl">$ 49.99</p>
//           <button className="rounded-md py-1.5 hover:animate-pulse px-4 border-1 border-secondary text-secondary">
//             Buy now
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default Card;

type CardProps = {
  category: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  image: string;
};

function Card({ category, title, author, rating, price, image }: CardProps) {
  return (
    <article className="max-w-[277px] flex flex-col card-box-shadow rounded-2xl bg-white">
      <div>
        <img className="w-full rounded-2xl" src={image} alt={title} />
      </div>
      <div className="flex px-5 py-5 flex-col gap-3">
        <h3 className="bg-[#EAEAEA] text-xs rounded-md max-w-[155px] py-[7px] font-medium px-4">
          {category}
        </h3>
        <p className="font-semibold text-sm leading-5 max-w-[228px]">{title}</p>
        <small>{author}</small>
        <div aria-live="polite">
          <ul className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index} aria-label={`Rating ${index + 1} star`}>
                <span
                  role="img"
                  className={`text-sm ${
                    index < Math.round(rating)
                      ? 'text-[#EBE100]'
                      : 'text-gray-300'
                  }`}
                  aria-label="star"
                >
                  &#9733;
                </span>
              </li>
            ))}
          </ul>
          <span className="flex font-semibold">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-secondary text-xl">
            ${price.toFixed(2)}
          </p>
          <button className="rounded-md py-1.5 hover:animate-pulse px-4 border-1 border-secondary text-secondary">
            Buy now
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
