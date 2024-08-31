import { CardFactory } from "../Components/CardFactory";
import { TCard } from "../types/Card";
import { CardDeck } from "../types/CardDeck";

type editorMenuProps = {
	addCardInDeck: (deck: CardDeck, newCard: TCard) => void;
	deleteCardInDeck: (deck: CardDeck, idNewCard: string) => void;
	deck: CardDeck;
};

export const EditorMenu = (props: editorMenuProps) => {
	return (
		<>
			<div className="editor-menu">
				<CardFactory></CardFactory>
			</div>
		</>
	);
};
