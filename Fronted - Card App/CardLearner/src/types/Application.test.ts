import { Application, AddDeck, ReomveDeckById, CreateApp } from "./Application";
import { CardDeck, CreateDeck } from "./CardDeck";

describe(`Application`, () => {
	const app: Application = CreateApp();

	it(`Adds new deck to app`, () => {
		const deck: CardDeck = CreateDeck("deck");
		AddDeck(app, deck);
		expect(app.decks).toEqual([deck]);

		AddDeck(app, deck);
		expect(app.decks).toEqual([deck]);
	});

	it(`Removes deck by id`, () => {
		const newApp: Application = CreateApp();
		AddDeck(newApp, CreateDeck("new deck"));

		expect(ReomveDeckById(newApp, newApp.decks[0].id).decks).toEqual([]);
	});
});
