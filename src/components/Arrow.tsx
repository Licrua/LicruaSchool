import Link from "next/link";

function Arrow() {
	return (
		<Link className=" inline-block  text-4xl" href={'/'}>
			<span className="bg-black/40 rounded-full   p-3 w-12 h-12 flex  justify-center items-center ">
				⇠
			</span>
		</Link>
	);
}

export default Arrow;
