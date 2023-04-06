import React from "react";

export default function ButtonReact({ href, primary, blank, children }) {
	return (
		<a
			href={href}
			className={
				primary
					? "py-1 px-2 md:px-4 text-sm md:text-base bg-slate-950 text-white border border-black transition-color hover:bg-gray-800 duration-500"
					: "py-1 px-3 md:px-4 text-sm md:text-base bg-transparent text-inherit border border-gray-700 transition-color hover:bg-slate-200 hover:text-black duration-500"
			}
			target={blank && "_blank"}
		>
			{children}
		</a>
	);
}
