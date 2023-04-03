import React from "react";
import { motion } from "framer-motion";
import ButtonReact from "./reusables/ButtonReact";

export default function HeroAnimated() {

	const framerAnimation = {
		initial: { opacity: 0, y: 100 },
		animate: { opacity: 1, y: 0 },
	};

	return (
		<section className="flex flex-col gap-6 items-center text-center">
			<div className="space-y-2">
				<motion.h1
					initial="initial"
					animate="animate"
					transition={{ ease: "easeOut"}}
					variants={framerAnimation}
					className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-800 via-slate-800 to-stone-950"
				>
					Frontend Developer
				</motion.h1>
				<motion.p
					initial="initial"
					animate="animate"
					transition={{ ease: "easeOut", delay: 0.1 }}
					variants={framerAnimation}
					className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light"
				>
					with Digital Marketing background
				</motion.p>
			</div>

			<motion.div
				initial="initial"
				animate="animate"
				transition={{ ease: "easeOut", delay: 0.2 }}
				variants={framerAnimation}
				className="flex gap-6"
			>
				<ButtonReact href="#" primary>
					Projects
				</ButtonReact>
				<ButtonReact href="https://github.com/kkulek" blank>
					GitHub
				</ButtonReact>
			</motion.div>
		</section>
	);
}
