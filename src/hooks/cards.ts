import { create } from "zustand";

export type Card = {
  id: string;
  credit_card_id?: string;
  cardIssuerId?: string;
  card_name: string;
  card_issuer: string;
  highlights?: string;
  welcome_offers?: string;
  apply_now: boolean;
  apply_now_sequence?: number;
  card_sequence?: number;
  apply_link?: string;
  featured_text?: string;
  issuer_name?: string;
  website_url?: string;
  launch_apply?: boolean;
  cc_apply_now_web?: boolean;
  apply_link_web?: string;
  for_apply_card_url?: string;
  card_image_url?: string;
  starting_color?: string;
  ending_color?: string;
  card_type?: string;
  joining_fees?: string;
  renewal_fees?: string;
  bsf_movies?: boolean;
  bsf_travel?: boolean;
  bsf_dining?: boolean;
  bsf_fuel?: boolean;
  bsf_shopping?: boolean;
  rewards_description?: string;
  movie_benefits?: string;
  dining_benefits?: string;
  travel_benefits?: string;
  lounge_benefits?: string;
  golf_benefits?: string;
  fuel_benefits?: string;
  reward_redemption?: string;
  created_at: string;
  updated_at: string;
  userId?: string;
};

type CardStore = {
  cards: Card[];
  setCards: (cards: Card[]) => void;
  addCard: (card: Card) => void;
  updateCard: (id: string, updatedData: Partial<Card>) => void;
  removeCard: (id: string) => void;
};

export const useCardStore = create<CardStore>((set) => ({
  cards: [],

  setCards: (cards: Card[]) => set({ cards }),

  addCard: (card: Card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),

  updateCard: (id: string, updatedData: Partial<Card>) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id ? { ...card, ...updatedData } : card
      ),
    })),

  removeCard: (id: string) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    })),
}));
