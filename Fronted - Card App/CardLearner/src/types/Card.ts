import { v4 as uuidv4 } from "uuid";

export type TCard = {
	id: string;
	frontSide: string;
	backSide: string;
};

const CreateCard = (frontSide: string, backSide: string): TCard => {
	return {
		id: uuidv4(),
		frontSide: frontSide,
		backSide: backSide,
	};
};

const EditCard = (card: TCard, newFront: string, newBack: string) => {
	card.backSide = newBack;
	card.frontSide = newFront;
};

export { EditCard, CreateCard };
