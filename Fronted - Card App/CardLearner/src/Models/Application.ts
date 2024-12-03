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
			...app,
			decks: app.decks.concat(newDeck),
		};
	}
	return {
		...app,
	};
};

const removeDeckById = (app: Application, id: string): Application => {
	return { ...app, decks: app.decks.filter((deck) => deck.id !== id) };
};

export { addDeck, removeDeckById, createApp };
