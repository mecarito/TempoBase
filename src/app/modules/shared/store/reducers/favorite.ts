import { createReducer, on } from '@ngrx/store';
import { addToFavorite, removeFromFavorite } from '../actions';
import { Track } from 'app-types';

interface InitialState {
  tracks: Track[];
}

const initialState: Track[] = [];

export const FavoriteReducer = createReducer(
  initialState,
  on(addToFavorite, (state, payload) => {
    return [...state, ...[payload.track]];
  })
);
