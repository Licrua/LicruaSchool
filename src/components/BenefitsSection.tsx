import SecondHeader from './UI/SecondHeader';

type BenefitsSectionProps = Record<
  | 'headerText'
  | 'paragraphText'
  | 'buttonText'
  | 'imageSrc'
  | 'buttonColor'
  | 'imageOrder',
  string
>;

function BenefitsSection({
  headerText,
  paragraphText,
  buttonText,
  imageSrc,
  buttonColor,
  imageOrder,
}: BenefitsSectionProps) {
  return (
    <section className="grid grid-cols-2 gap-[50px] sm:gap-[132px] items-center mt-[90px] px-5 sm:px-[150px]">
      <div className={imageOrder === 'first' ? 'order-first' : 'order-last'}>
        <img src={imageSrc} alt="girl as a representative of the company" />
      </div>
      <div className="flex flex-col gap-[20px]">
        <SecondHeader text={headerText} />
        <p className="text-xl  leading-8">{paragraphText}</p>
        <button
          className={`text-white max-w-[181px] rounded-xl py-[12px] px-[20px] sm:px-[40px] ${
            buttonColor === 'lightPurple'
              ? 'bg-[#AC85FF]'
              : buttonColor === 'darkPurple'
              ? 'bg-[#5228B6]'
              : ''
          }`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default BenefitsSection;
