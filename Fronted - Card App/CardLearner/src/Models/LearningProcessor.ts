import { Card } from "./Card";
import { CardDeck } from "./CardDeck";

export type LearningProcessor = {
	ulearnedCards: Card[];
};

const RemoveTopCard = (deck: CardDeck) => {
	deck.cards.shift();
};

const MoveCardBottom = (deck: CardDeck) => {
	const firstCard = deck.cards.shift();
	if (firstCard !== undefined) {
		deck.cards.push(firstCard);
	}
};

export { RemoveTopCard, MoveCardBottom };
