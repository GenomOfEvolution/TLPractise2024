import { v4 as uuidv4 } from "uuid";

export type Card = {
	id: string;
	frontSide: string;
	backSide: string;
};

<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/Card.ts
const CreateCard = (frontSide: string, backSide: string): Card => {
=======
const createCard = (frontSide: string, backSide: string): Card => ({
	id: uuidv4(),
	frontSide: frontSide,
	backSide: backSide,
});

const editCard = (card: Card, newFront: string, newBack: string): Card => {
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/Card.ts
	return {
		...card,
		frontSide: newFront,
		backSide: newBack,
	};
};

<<<<<<< Updated upstream:Fronted - Card App/CardLearner/src/Models/Card.ts
const EditCard = (card: Card, newFront: string, newBack: string) => {
	card.backSide = newBack;
	card.frontSide = newFront;
};

export { EditCard, CreateCard };
=======
export { editCard, createCard };
>>>>>>> Stashed changes:Fronted - Card App/CardLearner/src/types/Card.ts
