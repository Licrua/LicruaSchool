import SecondHeader from './UI/SecondHeader';

type BenefitsSectionProps = Record<
	| 'headerText'
	| 'paragraphText'
	| 'imageSrc'
	| 'buttonColor'
	| 'imageOrder',
	string
>;

function BenefitsSection({
	headerText,
	paragraphText,
	imageSrc,
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
			</div>
		</section>
	);
}

export default BenefitsSection;
