import {
	CardDeck,
	CreateDeck,
	RemoveCardById,
	EditCardById,
	AddCard,
} from "./CardDeck";
import { Card, CreateCard } from "./Card";

describe(`CardDeck`, () => {
	const EmptyDeck: CardDeck = {
		id: "1",
		name: "empty",
		cards: new Array<Card>(),
	};

	it(`Creates card deck and returns it`, () => {
		const newDeck: CardDeck = CreateDeck("empty");
		newDeck.id = "1";
		expect(newDeck).toEqual(EmptyDeck);
	});

	it(`Adds card with unique id's only`, () => {
		const coolCard: Card = CreateCard("чашка", "cup");
		const coolDeck: CardDeck = CreateDeck("deck");
		AddCard(coolDeck, coolCard);
		AddCard(coolDeck, coolCard);
		expect(coolDeck.cards).toEqual([coolCard]);
	});

	it(`Adds new Cards to deck`, () => {
		const firstCard: Card = CreateCard("чашка", "cup");
		AddCard(EmptyDeck, firstCard);
		expect(EmptyDeck.cards).toEqual([firstCard]);

		const secondCard: Card = CreateCard("чашка", "mug");
		AddCard(EmptyDeck, secondCard);
		expect(EmptyDeck.cards).toEqual([firstCard, secondCard]);
	});

	it(`Removes card by id`, () => {
		const deck: CardDeck = CreateDeck("not empty");
		AddCard(deck, CreateCard("front", "back"));
		const empty: CardDeck = RemoveCardById(deck, deck.cards[0].id);
		expect(empty.cards).toEqual([]);
	});

	it(`Edits card by id`, () => {
		const deck: CardDeck = CreateDeck("not empty");
		AddCard(deck, CreateCard("front", "back"));

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
	});
});
