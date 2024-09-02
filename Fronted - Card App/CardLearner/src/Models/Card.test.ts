import { Card, createCard, editCard } from "./Card";

jest.mock("uuid", () => ({
	v4: jest.fn(() => "test-uuid"),
}));

describe(`Card`, () => {
	describe("Creates card", () => {
		it("creates card and returns it", () => {
			const card: Card = createCard("чашка", "cup");
			expect(card).toEqual({
				id: "test-uuid",
				frontSide: "чашка",
				backSide: "cup",
			});
		});
	});

	describe("Edits card", () => {
		const card: Card = createCard("чашка", "cup");
		it("edits card front and back side", () => {
			const editedCard: Card = editCard(card, "кружка", "mug");
			expect(editedCard.backSide).toEqual("mug");
			expect(editedCard.frontSide).toEqual("кружка");
		});

		it("card id should not change after edit", () => {
			const id: string = card.id;
			const newCard: Card = editCard(card, "библиотека", "library");
			expect(newCard.id).toEqual(id);
		});
	});
});
