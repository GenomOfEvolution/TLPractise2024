import { StartMainMenu } from "./MainMenu";
import { Route, Routes } from "react-router-dom";
import { EditorMenu } from "./editorMenu";

export const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<StartMainMenu decks={decks} addDeck={addDeck} />} />
			<Route path="/editCardDeck" element={<EditorMenu />} />
		</Routes>
	);
};
