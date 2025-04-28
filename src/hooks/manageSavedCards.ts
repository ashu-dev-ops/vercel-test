

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CardIssuer {
  id: string;
  name: string;
  image: string;
}

interface Card {
  id: string;
  name: string;
  image: string;
  description?: string;
  benefits?: string[];
  annual_fee?: number;
  welcome_bonus?: string;
  lounge_access?: boolean;
  savedCardsData?: any[];
}

interface CardAddModalState {
  isOpen: boolean;
  selectedCardIssuer: CardIssuer | null;
  cardIssuerSearchQuery: string;
  cardSearchQuery: string;
  cardIssuers: CardIssuer[];
  cards: Card[];
  savedCards: string[];
  savedCardsData: Card[];
  isLoading: boolean;
  error: string | null;
  setOpen: (isOpen: boolean) => void;
  setSelectedCardIssuer: (cardIssuer: CardIssuer | null) => void;
  setCardIssuerSearchQuery: (query: string) => void;
  setCardSearchQuery: (query: string) => void;
  fetchCardIssuers: () => Promise<void>;
  fetchCardsByIssuer: (issuerId: string) => Promise<void>;
  addSavedCard: (cardId: string, card: Card) => Promise<void>;
  removeSavedCard: (cardId: string) => void;
  fetchSavedCards: () => Promise<void>;
  reset: () => void;
}

const useCardAddModalStore = create<CardAddModalState>()(
  persist(
    (set, get) => ({
      isOpen: true,
      selectedCardIssuer: null,
      cardIssuerSearchQuery: "",
      cardSearchQuery: "",
      cardIssuers: [],
      cards: [],
      savedCards: [],
      savedCardsData: [],
      isLoading: false,
      error: null,
      setOpen: (isOpen) => set({ isOpen }),
      setSelectedCardIssuer: (cardIssuer) =>
        set({ selectedCardIssuer: cardIssuer }),
      setCardIssuerSearchQuery: (query) =>
        set({ cardIssuerSearchQuery: query }),
      setCardSearchQuery: (query) => set({ cardSearchQuery: query }),
      fetchCardIssuers: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch("/api/v1/card-issuer");

          if (!response.ok) {
            throw new Error("Failed to fetch card issuers");
          }

          const data = await response.json();
          set({ cardIssuers: data, isLoading: false });
        } catch (error) {
          console.error("Error fetching card issuers:", error);
          set({ error: "Failed to fetch card issuers", isLoading: false });
        }
      },
      fetchCardsByIssuer: async (issuerId) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch(`/api/v1/card?cardIssuerId=${issuerId}`);

          if (!response.ok) {
            throw new Error("Failed to fetch cards");
          }

          const data = await response.json();
          set({ cards: data.data || [], isLoading: false });
        } catch (error) {
          console.error("Error fetching cards:", error);
          set({ error: "Failed to fetch cards", isLoading: false });
        }
      },
      reset: () => set({
          isOpen: false,
          selectedCardIssuer: null,
          cardIssuerSearchQuery: "",
          cardSearchQuery: "",
          cardIssuers: [],
          cards: [],
          savedCards: [],
          savedCardsData: [],
          isLoading: false,
          error: null,
        }),
      addSavedCard: async (cardId, card) => {
        try {
          const response = await fetch("/api/v1/saved-card", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ card_id: cardId }),
          });
          // Read and parse the response body as JSON
          const responseBody = await response.json();
          // Log the full response body to the console
          console.log("responseBody", responseBody);
          if (response.ok) {
            set((state) => ({
              savedCards: [...state.savedCards, cardId],
              savedCardsData: [...state.savedCardsData, responseBody],
            }));
          } else {
            throw new Error("Failed to add saved card");
          }
        } catch (error) {
          console.error("Error adding saved card:", error);
          set({ error: "Failed to add saved card" });
        }
      },
      removeSavedCard: async (cardId) => {
        try {
          const res = await fetch(`/api/v1/saved-card/${cardId}`, {
            method: "DELETE",
          });
          if (!res.ok) {
            throw new Error("Failed to remove saved card");
          }
        } catch (error) {
          console.error("Error removing saved card:", error);
        }
        set((state) => ({
          savedCards: state.savedCards.filter((id) => id !== cardId),
          savedCardsData: state.savedCardsData.filter(
            (card) => card.card_id !== cardId
          ),
        }));
      },
      fetchSavedCards: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch("/api/v1/saved-card");

          if (!response.ok) {
            throw new Error("Failed to fetch saved cards");
          }

          const data = await response.json();
          set({
            savedCards: data.map((card: any) => card.card_id),
            savedCardsData: data,
            isLoading: false,
          });
        } catch (error) {
          console.error("Error fetching saved cards:", error);
          set({ error: "Failed to fetch saved cards", isLoading: false });
        }
      },
    }),
    {
      name: "card-add-modal-storage",
    }
  )
);

export default useCardAddModalStore;
