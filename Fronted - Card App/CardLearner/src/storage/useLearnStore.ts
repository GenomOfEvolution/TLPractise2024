import { create } from "zustand";
import { Application } from "../Models/Application";
import { createJSONStorage, persist } from "zustand/middleware";
import { CardSlice, createCardSlice } from "./slices/cardSlice";
import { createDeckSlice, DeckSlice } from "./slices/deckSlice";

type StoreData = CardSlice & DeckSlice & Application;

export const useLearnStore = create<StoreData>()(
	persist(
		(...s) => ({
			decks: [],
			...createCardSlice(...s),
			...createDeckSlice(...s),
		}),
		{
			name: "word-learner",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ ...state, actions: undefined }),
		},
	),
);
