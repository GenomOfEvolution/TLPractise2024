import { CardDeck } from "./CardDeck";

export type Application = {
	decks: CardDeck[];
};

const CreateApp = (): Application => {
	return { decks: new Array<CardDeck>() };
};

const AddDeck = (app: Application, newDeck: CardDeck) => {
	if (!app.decks.find((deck) => deck.id === newDeck.id))
		app.decks.push(newDeck);
};

const ReomveDeckById = (app: Application, id: string): Application => {
	return { ...app, decks: app.decks.filter((deck) => deck.id !== id) };
};

export { AddDeck, ReomveDeckById, CreateApp };
