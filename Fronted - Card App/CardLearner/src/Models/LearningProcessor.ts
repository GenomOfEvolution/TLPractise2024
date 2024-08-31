import { Card } from "./Card";

export type LearningProcessor = {
	unlearnedCards: Card[];
};

const removeTopCard = (cards: Card[]): Card[] => {
	return cards.slice(1);
};

const moveCardBottom = (cards: Card[]): Card[] => {
	if (cards.length !== 0) {
		return cards.slice(1).concat(cards[0]);
	}
	return cards;
};

export { removeTopCard, moveCardBottom };
