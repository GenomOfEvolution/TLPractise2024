import { v4 as uuidv4 } from "uuid";
<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/CardDeck.ts
import { Card, EditCard } from "./Card";
=======
import { Card, editCard } from "./Card";
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/CardDeck.ts

export type CardDeck = {
	id: string;
	name: string;
	cards: Card[];
};

const createDeck = (name: string): CardDeck => ({
	id: uuidv4(),
	name: name,
	cards: [],
});

const addCard = (deck: CardDeck, newCard: Card): CardDeck => {
	if (!deck.cards.find((card) => card.id === newCard.id)) {
		return {
			...deck,
			cards: deck.cards.concat(newCard),
		};
	}
	return {
<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/CardDeck.ts
		id: uuidv4(),
		name: name,
		cards: new Array<Card>(),
	};
};

const AddCard = (deck: CardDeck, newCard: Card) => {
	if (!deck.cards.find((card) => card.id === newCard.id))
		deck.cards.push(newCard);
};

const RemoveCardById = (deck: CardDeck, id: string): CardDeck => {
=======
		...deck,
	};
};

const removeCardById = (deck: CardDeck, id: string): CardDeck => {
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/CardDeck.ts
	return { ...deck, cards: deck.cards.filter((card) => card.id !== id) };
};

const shuffleDeck = (deck: CardDeck): CardDeck => {
	return {
		...deck,
		cards: [...deck.cards].sort(() => Math.random() - 0.5),
	};
};

const editCardById = (deck: CardDeck, id: string, newFront: string, newBack: string): CardDeck => {
	const index = deck.cards.findIndex((card) => card.id === id);
	if (index !== -1) {
		return {
			...deck,
			cards: [
				...deck.cards.slice(0, index),
				editCard(deck.cards[index], newFront, newBack),
				...deck.cards.slice(index + 1),
			],
		};
	}
	return { ...deck };
};

export { createDeck, removeCardById, shuffleDeck, editCardById, addCard };
