import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../models/Game";

type GameState = {
  games: Game[]
}

const initialState: GameState ={
  games: []
}

const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers:{
    loadGames(state, action: PayloadAction<Game[]>){
      state.games = action.payload;
    },
    addGame(state, action: PayloadAction<Game>) {
      state.games.push(action.payload);
    },
    removeGame(state, action: PayloadAction<Game>){
      state.games = state.games.filter(
        (game) => game.id !== action.payload.id
      )
    }
  }
});

export default GameSlice.reducer
export const{
  loadGames,
  addGame,
  removeGame
} = GameSlice.actions
