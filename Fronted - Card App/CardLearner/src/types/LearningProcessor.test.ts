import { TCard, CreateCard } from "./Card";
import { RemoveTopCard, MoveCardBottom } from "./LearningProcessor";

describe("Learning Processor", () => {
	const cards: TCard[] = [];
	cards.push(CreateCard("кружка", "mug"));
	cards.push(CreateCard("чашка", "cup"));
	cards.push(CreateCard("кот", "cat"));

	it(`Moves top card to bottom of array`, () => {
		const expectedCards: TCard[] = [
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
		const expectedCards: TCard[] = [
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
	});
});
