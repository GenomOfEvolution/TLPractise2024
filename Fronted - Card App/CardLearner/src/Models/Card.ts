import { v4 as uuidv4 } from "uuid";
import { CardDeck } from "./CardDeck";

export type Card = {
	id: string;
	frontSide: string;
	backSide: string;
};

const CreateCard = (frontSide: string, backSide: string): Card => {
	return {
		id: uuidv4(),
		frontSide: frontSide,
		backSide: backSide,
	};
};

const AddCard = (deck: CardDeck, card: Card) => {
	deck.cards.push(card);
};

const EditCard = (card: Card, newFront: string, newBack: string) => {
	card.backSide = newBack;
	card.frontSide = newFront;
};

export { EditCard, CreateCard, AddCard };
