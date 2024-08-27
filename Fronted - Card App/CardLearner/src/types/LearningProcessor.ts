import { TCard } from "./Card";

export type LearningProcessor = {
	ulearnedCards: TCard[];
};

const RemoveTopCard = (cards: TCard[]) => {
	cards.shift();
};

const MoveCardBottom = (cards: TCard[]) => {
	const firstCard = cards.shift();
	if (firstCard !== undefined) {
		cards.push(firstCard);
	}
};

export { RemoveTopCard, MoveCardBottom };
