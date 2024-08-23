/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Card, CreateCard, EditCard } from "./Card";

describe(`Card`, () => {
	describe(`add`, () => {
		const card: Card = { id: "1", frontSide: "чашка", backSide: "cup" };

		/*it(`creates card and returns it`, () => {
			const newCard: Card = CreateCard(`библиотека`, `library`);
			expect(newCard).toBe(coolCard);
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
		});*/
	});
});
