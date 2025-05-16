// import { useAppSelector } from "@/store/store";
// import { SignInButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";

// function NavButton({ name, image }: { name: string, image: string }) {
// 	// const cart = useAppSelector(state => state.cart)

// 	return (
// 		{ if === name === 'account' return(<SignInButton >
// 		<button className="flex gap-[7px]">
// 			<Image width={20} height={20} src={`/images/${image}.svg`} alt={name} />
// 			</button>
// 			</button >)
// 	return (
// 		<SignInButton>

// 		</SignInButton>
// 			)
// }
// 	); 
// }

// export default NavButton;




import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from '@/store/store';
import { SignInButton } from '@clerk/nextjs';
// import { useAppSelector } from '@/store';

function NavButton({ name, image }: { name: string; image: string }) {
	const cart = useAppSelector(state => state.cart);
	console.log('cartdddddd', cart);
	console.log('image', image);
	

	if (name === "cart") {
		return (
			<Link
				href="/cart"
				className="flex items-center gap-1.5 relative"
				aria-label="Корзина"
			>
				<Image
					width={20}
					height={20}
					src={`/images/${image}.svg`}
					alt="icon_cart indicator"
				/>
				{cart?.length > 0 && (
					<span className="indicator-item badge badge-secondary">
						{cart?.length}
					</span>
				)}
			</Link>
		);
	}

	return (
		<SignInButton>
			<button className="flex items-center gap-1.5">
				<Image
					width={20}
					height={20}
					src={`/images/${image}.svg`}
					alt={name}
				/>
			</button>
		</SignInButton>
	);
};


export default NavButton;