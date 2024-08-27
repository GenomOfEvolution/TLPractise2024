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
	);
};
