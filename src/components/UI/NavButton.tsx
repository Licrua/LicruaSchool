import Image from "next/image";

function NavButton({ name, image }: { name: string, image: string }) {
	return (
		<button className="flex gap-[7px]">
			<Image width={20} height={20} src={`/images/${image}.svg`} alt={name} />
			<span className="indicator-item badge badge-secondary"></span>
			{/* <span className="hidden  mg:inline-block">{name}</span> */}
		</button>
	);
}

export default NavButton;
