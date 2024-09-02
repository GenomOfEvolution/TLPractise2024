import { CardDeck } from "../Models/CardDeck";
import icon_pen from "../assets/icon-pen.svg";
import icon_trashcan from "../assets/icon-trashcan.svg";
import { useNavigate } from "react-router-dom";
import { useLearnStore } from "../storage/useLearnStore";

export const Deck = (deck: CardDeck, key: string) => {
	const navigate = useNavigate();
	const { removeDeck } = useLearnStore();
	const deckIdProps = {
		state: { id: deck.id },
	};

	return (
		<>
			<div
				key={key}
				className="deck-wrapper"
				onClick={() => {
					console.log("learning deck");
				}}
			>
				<div className="deck">
					<div className="deck__panel">
						<img
							onClick={(event) => {
								navigate("/editCardDeck", deckIdProps);
								event.stopPropagation();
							}}
							className="deck__panel_item"
							src={icon_pen}
						/>
						<img
							onClick={(event) => {
								removeDeck(deck.id);
								event.stopPropagation();
							}}
							className="deck__panel_item"
							src={icon_trashcan}
						/>
					</div>
					<h2 className="deck__name">{deck.name}</h2>
				</div>
				<div className="deck__first-shadow"></div>
				<div className="deck__last-shadow"></div>
			</div>
		</>
	);
};
