import { Card } from "./Card";

export type LearningProcessor = {
<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/LearningProcessor.ts
	ulearnedCards: Card[];
};

const RemoveTopCard = (cards: Card[]) => {
	cards.shift();
};

const MoveCardBottom = (cards: Card[]) => {
	const firstCard = cards.shift();
	if (firstCard !== undefined) {
		cards.push(firstCard);
=======
	unlearnedCards: Card[];
};

const removeTopCard = (cards: Card[]): Card[] => {
	return cards.slice(1);
};

const moveCardBottom = (cards: Card[]): Card[] => {
	if (cards.length !== 0) {
		return cards.slice(1).concat(cards[0]);
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/LearningProcessor.ts
	}
	return cards;
};

export { removeTopCard, moveCardBottom };
