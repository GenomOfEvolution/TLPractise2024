<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/Card.test.ts
import { Card, CreateCard, EditCard } from "./Card";

describe(`Card`, () => {
	const card: Card = { id: "1", frontSide: "чашка", backSide: "cup" };

	it(`creates card and returns it`, () => {
		const newCard: Card = CreateCard(`чашка`, `cup`);
		newCard.id = "1";
		expect(newCard).toEqual(card);
	});

	it(`edits card value`, () => {
		const newCard: Card = CreateCard(`чашка`, `mug`);
		const oldCard: Card = {
			id: newCard.id,
			frontSide: `чашка`,
			backSide: `cup`,
		};
		EditCard(oldCard, oldCard.frontSide, `mug`);
		expect(oldCard).toEqual(newCard);
=======
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
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/Card.test.ts
	});
});
