import { useAppSelector } from '@/store/store';
import { useClerk } from '@clerk/nextjs';
import Tooltip from './Tooltip';
import CardButton from './CardButton';
import CardDetails from './CardDetails';

type CardProps = {
  category: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  image: string;
  id: number;
  onBuy: () => void;
};

function Card({
  category,
  title,
  id,
  author,
  rating,
  price,
  image,
  onBuy,
}: CardProps) {
  const carts = useAppSelector((state) => state.cart);
  console.log('carts', carts);
  const { user } = useClerk();
  const hasIncluded = carts.some((item) => item.id === String(id)) || !user;

  return (
    <article className="flex flex-col hover:scale-110 transition-all transition-discrete card-box-shadow rounded-2xl bg-white overflow-hidden">
      <div>
        <img
          className="w-full h-[180px] object-cover rounded-t-2xl"
          src={image}
          alt={title}
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
                  className="text-[#f1e95b] text-sm"
                  aria-label="star"
                >
                  &#9733;
                </span>
              </li>
            ))}
          </ul>
          <p className="flex font-semibold">{rating}</p>
        </div>
        <p className="font-bold text-secondary text-xl">$ {price}</p>
      </div>
      <div className="flex items-center justify-between mt-auto px-5 py-4 gap-4">
        <div className="flex-1">
          <CardDetails id={id} />
        </div>
        <div className="flex-1">
          {!user ? (
            <Tooltip text="You should authorize">
              <CardButton onBuy={onBuy} hasIncluded={hasIncluded} />
            </Tooltip>
          ) : (
            <CardButton onBuy={onBuy} hasIncluded={hasIncluded} />
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
