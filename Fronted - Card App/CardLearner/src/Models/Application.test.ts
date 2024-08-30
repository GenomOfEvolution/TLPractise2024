import { Application, addDeck, removeDeckById, createApp } from "./Application";
import { CardDeck, createDeck } from "./CardDeck";

describe("Application", () => {
	const app: Application = createApp();
	const deck: CardDeck = createDeck("cool deck");

	describe("Adds decks to app", () => {
		it("adds deck and returns app", () => {
			expect(addDeck(app, deck)).toEqual({ decks: [deck] });
		});

		it("does not add deck with same id", () => {
			const newApp: Application = addDeck(app, deck);
			expect(addDeck(newApp, deck)).toEqual({ decks: [deck] });
		});
	});

	describe("Removes deck by id", () => {
		it("removes deck by id and returns app", () => {
			const newApp: Application = addDeck(app, deck);
			expect(removeDeckById(newApp, deck.id)).toEqual({ decks: [] });
		});

		it("removes deck with no such id", () => {
			const newApp: Application = addDeck(app, deck);
			expect(removeDeckById(newApp, "2281337")).toEqual(newApp);
			expect(removeDeckById(app, deck.id)).toEqual(app);
		});
	});
});
