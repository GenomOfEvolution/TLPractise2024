import { v4 as uuidv4 } from "uuid";
import { Card, EditCard } from "./Card";

export type CardDeck = {
	id: string;
	name: string;
	cards: Card[];
};

const CreateDeck = (name: string): CardDeck => {
	return {
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
	return { ...deck, cards: deck.cards.filter((card) => card.id !== id) };
};

const ShuffleDeck = (deck: CardDeck) => {
	for (let i = deck.cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
	}
};

const EditCardById = (
	deck: CardDeck,
	id: string,
	newFront: string,
	newBack: string,
): CardDeck => {
	const index = deck.cards.findIndex((card) => card.id === id);
	if (index !== -1) {
		EditCard(deck.cards[index], newFront, newBack);
		return { ...deck, cards: deck.cards };
	} else {
		return { ...deck };
	}
};

export { CreateDeck, RemoveCardById, ShuffleDeck, EditCardById, AddCard };
