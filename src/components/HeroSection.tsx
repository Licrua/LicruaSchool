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
    <section className="grid grid-cols-2 gap-[132px] items-center mt-[90px] px-[150px]">
      <div className={`order-${imageOrder}`}>
        <img src={imageSrc} alt="girl as a representative of the company" />
      </div>
      <div className="flex flex-col gap-[20px]">
        <SecondHeader text={headerText} />
        <p className="text-xl  leading-8">{paragraphText}</p>
        <button
          className={`bg-[${buttonColor}] text-white max-w-[181px] rounded-xl  py-[12] px-[40]`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default BenefitsSection;
