import React from "react";
import { motion } from "framer-motion";

type ImageProps = {
	image: string;
	link: string;
}

export default function ImageAnimated({ image, link }: ImageProps) {

	return (
		<motion.div
			initial={{ opacity: 0, x: 100, y: 0, scale: 0.25 }}
			animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
			transition={{ ease: "easeOut", delay: 0.05, duration: 0.5 }}
			className="w-full h-full "
		>
			<a href={link} target="_blank">
				<img
					src={`./projects/${image}.png`}
					alt={`Project - ${image}`}
					className="w-full h-full object-cover rounded-md shadow-lg"
				/>
			</a>
		</motion.div>
	);
}
