import { StateCreator } from "zustand";
import { Application, getDeckById } from "../../Models/Application";
import { CardDeck, addCard } from "../../Models/CardDeck";
import { createCard } from "../../Models/Card";

export type CardSlice = {
	addNewCard: (deckId: string, frontSide: string, backSide: string) => void;
	removeCard: (deckId: string, cardId: string) => void;
	editCard: (deckId: string, cardId: string, newBack: string, newFront: string) => void;

	editDecks: (id: string, edit: (deck: CardDeck) => CardDeck) => void;
};

export const createCardSlice: StateCreator<CardSlice & Application, [], [], CardSlice> = (set, get) => ({
	decks: [],
	addNewCard: (deckId: string, frontSide: string, backSide: string) => {
		set((state) => ({}));
	},

	removeCard: (deckId: string, cardId: string) => {},
	editCard: (deckId: string, cardId: string, newBack: string, newFront: string) => {},

	editDecks: (id: string, edit: (deck: CardDeck) => CardDeck) => {},
});
