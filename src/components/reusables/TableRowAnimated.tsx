import { motion } from "framer-motion";

type RowItems = {
	type: string;
	content: string;
};

export default function TableRowAnimated({ data }) {
	const rowAnimation = {
		initial: { opacity: 0, x: -100 },
		animate: { opacity: 1, x: 0 },
	};

	return (
		<dl className="divide-y divide-gray-700">
			{data.map((item: RowItems, index: number) => (
				<motion.div
					className="py-5 grid grid-cols-3 gap-4 animate-fade"
					initial="initial"
					animate="animate"
					transition={{ ease: "easeInOut", delay: index * 0.2 }}
					variants={rowAnimation}
				>
					<dt className="font-medium text-gray-300">{item.type}</dt>
					<dd className="col-span-2">{item.content}</dd>
				</motion.div>
			))}
		</dl>
	);
}
