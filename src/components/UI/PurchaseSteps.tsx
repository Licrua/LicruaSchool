
import purchaseSteps from "@/data/stepsData"
import { useAppSelector } from "@/store/store"

export function PurchaseSteps() {
	const order = useAppSelector(state => state.order.cartStatus);
	console.log('order', order);
	
	const getStepClass = (stepId: string) => {
		const stepIndex = purchaseSteps.findIndex((step) => step.id === stepId)
		const currentIndex = purchaseSteps.findIndex((step) => step.id === order)

		if (stepIndex < currentIndex) return 'step step-success' // Пройденные шаги
		if (stepIndex === currentIndex) return 'step step-success' // Текущий шаг
		return 'step' // Будущие шаги
	}

	return (
		<div className="md:text-center">
			<ul className="steps md:items-center md:gap-3 md:mb-10 steps-vertical sm:steps-horizontal">
				{purchaseSteps.map((step) => (
					<li key={step.id} className={getStepClass(step.id)}>
						<span className="step-icon">{step.icon}</span>
						{step.label}
					</li>
				))}
			</ul>
		</div>
	)
}
export default PurchaseSteps