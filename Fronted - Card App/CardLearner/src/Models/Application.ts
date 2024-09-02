import { CardDeck } from "./CardDeck";

export type Application = {
	decks: CardDeck[];
};

const createApp = (): Application => ({
	decks: [],
});

const addDeck = (app: Application, newDeck: CardDeck): Application => {
	if (!app.decks.find((deck) => deck.id === newDeck.id)) {
		return {
			decks: [...app.decks, newDeck],
		};
	}
	return {
		...app,
	};
};

const removeDeckById = (app: Application, id: string): Application => {
	return { decks: app.decks.filter((deck) => deck.id !== id) };
};

const getDeckById = (app: Application, id: string): CardDeck => {
	const deck = app.decks.filter((deck) => deck.id === id);
	return deck[0];
};

export { addDeck, removeDeckById, createApp, getDeckById };
