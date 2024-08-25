import { Card } from "./Card";

export type LearningProcessor = {
	ulearnedCards: Card[];
};

const RemoveTopCard = (cards: Card[]) => {
	cards.shift();
};

const MoveCardBottom = (cards: Card[]) => {
	const firstCard = cards.shift();
	if (firstCard !== undefined) {
		cards.push(firstCard);
	}
};

export { RemoveTopCard, MoveCardBottom };
