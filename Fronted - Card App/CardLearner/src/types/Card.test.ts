import { TCard, CreateCard, EditCard } from "./Card";

describe(`Card`, () => {
	const card: TCard = { id: "1", frontSide: "чашка", backSide: "cup" };

	it(`creates card and returns it`, () => {
		const newCard: TCard = CreateCard(`чашка`, `cup`);
		newCard.id = "1";
		expect(newCard).toEqual(card);
	});

	it(`edits card value`, () => {
		const newCard: TCard = CreateCard(`чашка`, `mug`);
		const oldCard: TCard = {
			id: newCard.id,
			frontSide: `чашка`,
			backSide: `cup`,
		};
		EditCard(oldCard, oldCard.frontSide, `mug`);
		expect(oldCard).toEqual(newCard);
	});
});
