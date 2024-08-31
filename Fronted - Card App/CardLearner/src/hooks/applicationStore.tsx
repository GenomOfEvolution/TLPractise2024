import { Application } from "../types/Application";
import { create } from "zustand";
import { CardDeck } from "../types/CardDeck";
import { TCard } from "../types/Card";

export const useDecksStore = create<Application>((set) => ({
	decks: [],
	addDeck: (newDeck: CardDeck) => {
		set((state) => ({
			...state,
			decks: [...state.decks, newDeck],
		}));
	},
	addCardInDeck: (idDeck: string, newCard: TCard) => {
		set((state) => ({
			...state,
			decks: [],
		}));
	},
}));
