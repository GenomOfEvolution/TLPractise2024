import { StateCreator } from "zustand";
import { createDeck } from "../../Models/CardDeck";
import { addDeck, Application, removeDeckById } from "../../Models/Application";

export type DeckSlice = {
	addNewDeck: (name: string) => void;
	removeDeck: (id: string) => void;
};

export const createDeckSlice: StateCreator<DeckSlice & { app: Application }, [], [], DeckSlice> = (set) => ({
	addNewDeck: (name: string) => {
		set((state) => ({
			app: addDeck(state.app, createDeck(name)),
		}));
	},
	removeDeck: (deckId: string) => {
		set((state) => ({
			app: removeDeckById(state.app, deckId),
		}));
	},
});
