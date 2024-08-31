import { CardDeck, createDeck, removeCardById, editCardById, addCard, shuffleDeck } from "./CardDeck";

import { Card, createCard } from "./Card";

jest.mock("uuid", () => ({
	v4: jest.fn(() => "test-uuid"),
}));

describe("CardDeck", () => {
	describe("Creates deck", () => {
		it("creates deck and return it", () => {
			const deck: CardDeck = createDeck("transport words");
			expect(deck).toEqual({
				id: "test-uuid",
				cards: [],
				name: "transport words",
			});
		});
	});

	const catCard: Card = createCard("кот", "cat");
	const emptyDeck: CardDeck = createDeck("Cool deck");
	const deck: CardDeck = addCard(emptyDeck, catCard);
	describe("Add cards to deck", () => {
		it("adds card to empty deck", () => {
			expect(addCard(emptyDeck, catCard)).toEqual({
				id: "test-uuid",
				cards: [catCard],
				name: "Cool deck",
			});
		});

		it("not adds cards with same id", () => {
			expect(addCard(deck, catCard)).toEqual(deck);
		});
	});

	describe("Removes card by id", () => {
		it("removes card by id and returns deck", () => {
			expect(removeCardById(deck, catCard.id)).toEqual({
				id: "test-uuid",
				cards: [],
				name: "Cool deck",
			});
		});

		it("no card with id to remove", () => {
			expect(removeCardById(deck, "2281337")).toEqual(deck);
			expect(removeCardById(emptyDeck, catCard.id)).toEqual(emptyDeck);
		});
	});

	describe("Edits card by id", () => {
		it("edits card by id and returns deck", () => {
			expect(editCardById(deck, catCard.id, "пес", "dog")).toEqual({
				id: "test-uuid",
				cards: [
					{
						id: catCard.id,
						frontSide: "пес",
						backSide: "dog",
					},
				],
				name: "Cool deck",
			});
		});

		it("no card with id to edit", () => {
			expect(editCardById(deck, "2281337", "пес", "dog")).toEqual(deck);
			expect(editCardById(emptyDeck, catCard.id, "пес", "dog")).toEqual(emptyDeck);
		});
	});

	describe("Shuffles deck", () => {
		beforeEach(() => {
			jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
		});

<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/CardDeck.test.ts
		const edited: CardDeck = EditCardById(
			deck,
			deck.cards[0].id,
			"чашка",
			"cup",
		);
		const expectedCard: Card = {
			id: edited.cards[0].id,
			frontSide: "чашка",
			backSide: "cup",
		};
		expect(edited.cards).toEqual([expectedCard]);
=======
		afterEach(() => {
			jest.spyOn(global.Math, "random").mockRestore();
		});

		it("shuffles empty deck", () => {
			expect(shuffleDeck(emptyDeck)).toEqual(emptyDeck);
		});

		it("shuffled deck not equal old one", () => {
			const newDeck: CardDeck = {
				name: "big deck",
				id: "test-uuid",
				cards: [createCard("кот", "cat"), createCard("пес", "dog"), createCard("кружка", "cup")],
			};

			const shuffled: CardDeck = shuffleDeck(newDeck);
			expect(shuffled.cards).not.toEqual(newDeck.cards);
		});
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/CardDeck.test.ts
	});
});
