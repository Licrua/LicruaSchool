import Image from 'next/image';

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
    <article className="flex flex-col  card-box-shadow rounded-2xl bg-white overflow-hidden">
      <div>
        <img
          className="w-full h-[180px] object-cover rounded-t-2xl"
          src={image}
          alt="Artificial Intelligence course"
        />
      </div>

      <div className="flex flex-col flex-1 px-5 pt-5 gap-3">
        <h3 className="bg-[#EAEAEA] text-xs rounded-md max-w-[155px] py-[7px] font-medium px-4">
          {category}
        </h3>
        <p className="font-semibold text-sm leading-5 max-w-[228px]">{title}</p>
        <small>{author}</small>
        <div className="flex gap-1 items-center mt-auto" aria-live="polite">
          <ul className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index} aria-label={`Rating ${index + 1} star`}>
                <span
                  role="img"
                  className="text-[#EBE100] text-sm"
                  aria-label="star"
                >
                  &#9733;
                </span>
              </li>
            ))}
          </ul>
          <p className="flex font-semibold">{rating}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto px-5 py-4">
        <p className="font-bold text-secondary text-xl">$ {price}</p>
        <button className="rounded-md py-1.5 hover:text-black hover:animate-pulse px-4 border border-secondary text-secondary">
          Buy now
        </button>
      </div>
    </article>
  );
}

export default Card;

// type CardProps = {
//   category: string;
//   title: string;
//   author: string;
//   rating: number;
//   price: number;
//   image: string;
// };

// function Card({ category, title, author, rating, price, image }: CardProps) {
//   return (
//     <article className="max-w-[277px] flex flex-col card-box-shadow rounded-2xl bg-white">
//       <div>
//         <img className="w-full rounded-2xl" src={image} alt={title} />
//       </div>
//       <div className="flex px-5 py-5 flex-col gap-3">
//         <h3 className="bg-[#EAEAEA] text-xs rounded-md max-w-[155px] py-[7px] font-medium px-4">
//           {category}
//         </h3>
//         <p className="font-semibold text-sm leading-5 max-w-[228px]">{title}</p>
//         <small>{author}</small>
//         <div aria-live="polite">
//           <ul className="flex">
//             {Array.from({ length: 5 }, (_, index) => (
//               <li key={index} aria-label={`Rating ${index + 1} star`}>
//                 <span
//                   role="img"
//                   className={`text-sm ${
//                     index < Math.round(rating)
//                       ? 'text-[#EBE100]'
//                       : 'text-gray-300'
//                   }`}
//                   aria-label="star"
//                 >
//                   &#9733;
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <span className="flex font-semibold">{rating.toFixed(1)}</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <p className="font-bold text-secondary text-xl">
//             ${price.toFixed(2)}
//           </p>
//           <button className="rounded-md py-1.5 hover:animate-pulse px-4 border-1 border-secondary text-secondary">
//             Buy now
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default Card;
