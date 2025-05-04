import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

type OrderSuccessProps = {
	orderId: string;
};

export default async function OrderSuccessPage({ orderId }: OrderSuccessProps) {
	const user = await currentUser();
	console.log('user', user);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
			<div className="card bg-base-100 shadow-2xl w-full max-w-lg">
				<div className="card-body items-center text-center">
					<div className="text-6xl mb-4">🎉</div>
					<h2 className="card-title text-3xl flex flex-col font-bold mb-2 text-primary">
						<p>Dear {user?.username}</p>
						<p>
							Thank you for your order!
						</p>
					</h2>

					<p className="text-base text-base-content/80">
						Your order has been successfully placed. 🎊
					</p>

					<div className="bg-base-200 w-full mt-4 rounded-xl p-4 text-left">
						<p className="text-sm text-center text-base-content/70">Order Number: #{user?.createdAt}</p>
						<p className="text-lg font-bold text-primary break-all">{orderId}</p>
					</div>
					<div className="bg-base-400">
						<p>
							The course will be sent to your email
						</p>
						<span className="bg-base-200 p-1 underline-offset-4 underline ">{user?.emailAddresses[0].emailAddress}</span>
					</div>
					<div className="mt-6 space-y-2 text-base-content/70 text-sm">
						<p>📦 You can view your purchase in <strong>My Courses</strong> on the main page.</p>
						<p>📞 Our manager will call you within a few hours to confirm the order.</p>
						<p>💬 Stay tuned and check your messages!</p>
					</div>

					<div className="card-actions mt-8">
						<Link href="/" passHref>
							<button className="btn btn-primary btn-wide">Back to Home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
