<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/LearningProcessor.test.ts
import { Card, CreateCard } from "./Card";
import { RemoveTopCard, MoveCardBottom } from "./LearningProcessor";

describe("Learning Processor", () => {
	const cards: Card[] = [];
	cards.push(CreateCard("кружка", "mug"));
	cards.push(CreateCard("чашка", "cup"));
	cards.push(CreateCard("кот", "cat"));

	it(`Moves top card to bottom of array`, () => {
		const expectedCards: Card[] = [
			{
				id: cards[1].id,
				frontSide: cards[1].frontSide,
				backSide: cards[1].backSide,
			},
			{
				id: cards[2].id,
				frontSide: cards[2].frontSide,
				backSide: cards[2].backSide,
			},
			{
				id: cards[0].id,
				frontSide: cards[0].frontSide,
				backSide: cards[0].backSide,
			},
		];

		MoveCardBottom(cards);
		expect(cards).toEqual(expectedCards);
	});

	it(`Deletes first card`, () => {
		const expectedCards: Card[] = [
			{
				id: cards[1].id,
				frontSide: cards[1].frontSide,
				backSide: cards[1].backSide,
			},
			{
				id: cards[2].id,
				frontSide: cards[2].frontSide,
				backSide: cards[2].backSide,
			},
		];
		RemoveTopCard(cards);
		expect(cards).toEqual(expectedCards);
=======
import { Card, createCard } from "./Card";
import { removeTopCard, moveCardBottom } from "./LearningProcessor";

describe("Learning Processor", () => {
	const cards: Card[] = [];
	const firstCard: Card = createCard("чашка", "cup");
	const secondCard: Card = createCard("кружка", "mug");
	const thirdCard: Card = createCard("кот", "cat");

	beforeEach(() => {
		cards.push(firstCard);
		cards.push(secondCard);
		cards.push(thirdCard);
	});

	afterEach(() => {
		cards.splice(0, cards.length);
	});

	describe("Removes first card from the deck", () => {
		it("removes first card", () => {
			expect(removeTopCard(cards)).toEqual([secondCard, thirdCard]);
		});

		it("removes card from deck with 1 card", () => {
			expect(removeTopCard([firstCard])).toEqual([]);
		});

		it("removes card from empty deck", () => {
			expect(removeTopCard([])).toEqual([]);
		});
	});

	describe("Moves first card to the end of deck", () => {
		it("moves first card", () => {
			expect(moveCardBottom(cards)).toEqual([secondCard, thirdCard, firstCard]);
		});

		it("moves first card from deck with 1 card", () => {
			expect(moveCardBottom([firstCard])).toEqual([firstCard]);
		});

		it("moves card from empty deck", () => {
			expect(moveCardBottom([])).toEqual([]);
		});
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/LearningProcessor.test.ts
	});
});
