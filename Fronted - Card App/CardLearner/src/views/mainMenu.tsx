<<<<<<< Updated upstream
import { React } from "react";
import { Application } from "../types/Application";

type mainMenuProps = {
	app: Application;
};

const startMainMenu = (props: mainMenuProps) => {
	return (
		<div>
			<div>
				<h1>Card Learner</h1>
			</div>
			<div>
                <div>
                    <DeckFactory></DeckFactory>
                </div>
                {
                    props.app.decks.map(() => (
                        <CardDeck {}></CardDeck>
                    );
                    );
                }
            </div>
		</div>
=======
import { DeckFactory } from "../Components/DeckFactory";
import { Deck } from "../Components/CardDeck";
import { CardDeck } from "../types/CardDeck";

type startMainMenuProps = {
	decks: CardDeck[];
	addDeck: (newDeck: CardDeck) => void;
};

export const StartMainMenu = (props: startMainMenuProps) => {
	return (
		<>
			<div className="main-menu">
				<DeckFactory addDeckInStore={props.addDeck}></DeckFactory>
				{props.decks.map((deck) => (
					<Deck deck={deck} key={deck.id} />
				))}
			</div>
		</>
>>>>>>> Stashed changes
	);
};
