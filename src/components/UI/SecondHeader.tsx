function SecondHeader({
  text,
  position,
}: {
  text: string;
  position?: 'left' | 'center';
}) {
  return (
    <h2
      className={`text-[23px] sm:text-[44px] text-${position}  leading-[40px] sm:leading-[55px] font-semibold`}
    >
      {text}
    </h2>
  );
}

export default SecondHeader;
