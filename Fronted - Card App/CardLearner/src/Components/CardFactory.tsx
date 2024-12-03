import React from "react";
import icon_cross from "../assets/icon-cross.svg";

export const CardFactory = () => {
	return (
		<>
			<div
				className="card-wrapper"
				onClick={() => {
					console.log("creating card");
				}}
			>
				<div className="factory">
					<img className="factory__item" src={icon_cross} />
				</div>
			</div>
		</>
	);
};
