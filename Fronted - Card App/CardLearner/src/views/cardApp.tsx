import { StartMainMenu } from "./mainMenu";
import { Route, Routes } from "react-router-dom";
import { EditorMenu } from "./editorMenu";
import { useDecksStore } from "../hooks/applicationStore";
import { StateCreator } from "zustand";

export const Main = () => {
	const { addDeck, decks } = useDecksStore();

	return (
		<Routes>
			<Route
				path="/"
				element={<StartMainMenu decks={decks} addDeck={addDeck} />}
			/>
			<Route path="/editCardDeck" element={<EditorMenu />} />
		</Routes>
	);
};

const createCardSlice: StateCreator<>