import React from "react";
import icon_cross from "../assets/icon-cross.svg";
import { useLearnStore } from "../storage/useLearnStore";

export const DeckFactory = () => {
	const { addNewDeck } = useLearnStore();
	return (
		<>
			<div
				className="deck-wrapper"
				onClick={() => {
					addNewDeck("new deck");
				}}
			>
				<div className="factory">
					<img className="factory__item" src={icon_cross} />
				</div>
			</div>
		</>
	);
};
