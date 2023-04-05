import React from "react";

export default function ButtonReact({ href, primary, blank, children }) {
	return (
		<a
			href={href}
			className={
				primary
					? "py-1 px-4 bg-black text-white text-base border border-black transition-color duration-500"
					: "py-1 px-4 bg-transparent text-inherit border border-gray-700 text-base transition-color duration-500"
			}
			target={blank && "_blank"}
		>
			{children}
		</a>
	);
}
