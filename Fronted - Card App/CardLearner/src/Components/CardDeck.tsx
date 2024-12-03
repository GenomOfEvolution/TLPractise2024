import React from "react";
import { CardDeck } from "../types/CardDeck";
import icon_pen from "../assets/icon-pen.svg";
import icon_trashcan from "../assets/icon-trashcan.svg";
<<<<<<< Updated upstream
=======
import { Navigate, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

type DeckProps = {
	deck: CardDeck;
};

export const Deck: React.FC<DeckProps> = ({ deck: CardDeck }) => {
<<<<<<< Updated upstream
=======
	const navigate = useNavigate();
>>>>>>> Stashed changes
	return (
		<>
			<div
				className="deck-wrapper"
				onClick={() => {
					console.log("learning deck");
				}}
			>
				<div className="deck">
					<div className="deck__panel">
						<img
							onClick={(event) => {
<<<<<<< Updated upstream
								console.log("editing deck");
=======
								navigate("/editCardDeck");
>>>>>>> Stashed changes
								event.stopPropagation();
							}}
							className="deck__panel_item"
							src={icon_pen}
						/>
						<img
							onClick={(event) => {
								console.log("deleting deck");
								event.stopPropagation();
							}}
							className="deck__panel_item"
							src={icon_trashcan}
						/>
					</div>
					<h2 className="deck__name">{CardDeck.name}</h2>
				</div>
				<div className="deck__first-shadow"></div>
				<div className="deck__last-shadow"></div>
			</div>
		</>
	);
};
