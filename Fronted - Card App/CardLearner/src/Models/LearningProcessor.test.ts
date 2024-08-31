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
			expect(moveCardBottom(cards)).toEqual([
				secondCard,
				thirdCard,
				firstCard,
			]);
		});

		it("moves first card from deck with 1 card", () => {
			expect(moveCardBottom([firstCard])).toEqual([firstCard]);
		});

		it("moves card from empty deck", () => {
			expect(moveCardBottom([])).toEqual([]);
		});
	});
});
