import { v4 as uuidv4 } from "uuid";

export type Card = {
	id: string;
	frontSide: string;
	backSide: string;
};

const createCard = (frontSide: string, backSide: string): Card => ({
	id: uuidv4(),
	frontSide: frontSide,
	backSide: backSide,
});

const editCard = (card: Card, newFront: string, newBack: string): Card => {
	return {
		...card,
		frontSide: newFront,
		backSide: newBack,
	};
};

export { editCard, createCard };
