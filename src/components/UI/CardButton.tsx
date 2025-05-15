function CardButton({onBuy, hasIncluded}: {onBuy: () => void; hasIncluded: boolean}) {
	return (
    <button
      onClick={onBuy}
      disabled={hasIncluded}
      className="rounded-md disabled:bg-gray-700 disabled:line-through disabled:text-amber-50 disabled:pointer-events-none py-1.5 hover:text-black hover:animate-pulse px-4 border border-secondary text-secondary"
    >
      Buy now
    </button>
  );
}

export default CardButton;