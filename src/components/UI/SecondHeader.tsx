function SecondHeader({
  text,
  position,
}: {
  text: string;
  position?: 'left' | 'center';
}) {
  return (
    <h2
      className={`text-[44px] text-${position}  leading-[55px] font-semibold`}
    >
      {text}
    </h2>
  );
}

export default SecondHeader;
