

const purchaseSteps = [
	{
		id: 'authorization',
		label: 'Authorization',
		icon: '😕',
	},
	{
		id: 'formCart',
		label: 'Form the cart',
		icon: '😃',
	},
	{
		id: 'makeOrder',
		label: 'Make the order',
		icon: '😍',
	},
] as const;
export default purchaseSteps;

export type Stage = 'authorization' | 'formCart' | 'makeOrder';


export const stages: Record<Stage, number> = {
	authorization: 1,
	formCart: 2,
	makeOrder: 3,
}