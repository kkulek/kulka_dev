import React from "react";

export default function ButtonReact({ href, primary, blank, children }) {
	return (
		<a
			href={href}
			className={
				primary
					? "py-1 px-4 bg-black text-white text-base border border-black transition-color duration-500"
					: "py-1 px-4 bg-white text-black border border-black text-base transition-color duration-500"
			}
			target={blank && "_blank"}
		>
			{children}
		</a>
	);
}
