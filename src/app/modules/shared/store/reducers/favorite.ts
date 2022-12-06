import { createReducer, on } from '@ngrx/store';
import { addToFavorite, removeFromFavorite } from '../actions';
import { Track } from 'app-types';

const initialState: Track[] = [];

export const FavoriteReducer = createReducer(
  initialState,
  on(addToFavorite, (state, payload) => {
    const duplicate = state.find((track) => track.id === payload.track.id);
    if (!duplicate) {
      return [...state, payload.track];
    } else {
      return state;
    }
  }),
  on(removeFromFavorite, (state, payload) => {
    return state.filter((track) => track.id !== payload.track.id);
  })
);
