import { create } from 'zustand';

// Define types
interface SelectedCard {
  id: string;
  imageUrl: string;
}

interface ComparisonStore {
  selectedCards: SelectedCard[];
  addCardToCompare: (card: SelectedCard) => void;
  removeCardFromCompare: (cardId: string) => void;
  clearComparison: () => void;
}

// Create the Zustand store
export const useComparisonStore = create<ComparisonStore>((set, get) => ({
  selectedCards: [],
  addCardToCompare: (card) => {
    const { selectedCards } = get();
    const exists = selectedCards.find((c) => c.id === card.id);
    if (!exists) {
      if (selectedCards.length < 4) {
        set({ selectedCards: [...selectedCards, card] });
      } else {
        console.warn('Comparison limit reached (4 cards)');
      }
    }
  },
  removeCardFromCompare: (cardId) => {
    set((state) => ({
      selectedCards: state.selectedCards.filter((card) => card.id !== cardId),
    }));
  },
  clearComparison: () => {
    set({ selectedCards: [] });
  },
}));
