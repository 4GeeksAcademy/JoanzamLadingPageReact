import React from "react";

//create your first component
const Nombre = () => {
	const name = "Joan"
	return (
		<div className="text-center">
			<h1>Hello wey {name}</h1>
		</div>
	);
};

export default Nombre;