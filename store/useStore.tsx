import { create } from "zustand";
import axios from "axios";
// import { EXPO_PUBLIC_MOVIE_API_KEY } from "@env"; // Import from .env

// Define TypeScript types
interface ApiResponse {
  [key: string]: any; // Store any API response structure
}

interface StoreState {
  data: ApiResponse | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

// API Details
const API_URL = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
const RAPIDAPI_HOST = "imdb236.p.rapidapi.com";
const RAPIDAPI_KEY = "dff3a07ce0msh254f739e5557095p1de033jsna1d945f6e67b"; // Replace with your actual API key

// Create Zustand store
const useStore = create<StoreState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(API_URL, {
        headers: {
          "x-rapidapi-host": RAPIDAPI_HOST,
          "x-rapidapi-key": RAPIDAPI_KEY,
        },
      });

      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch data", loading: false });
    }
  },
}));

export default useStore;
