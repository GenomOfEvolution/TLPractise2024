import React from "react";
import icon_cross from "../assets/icon-cross.svg";

export const DeckFactory = () => {
	return (
		<>
			<div
				className="deck-wrapper"
				onClick={() => {
					console.log("creating deck");
				}}
			>
				<div className="factory">
					<img className="factory__item" src={icon_cross} />
				</div>
			</div>
		</>
	);
};
