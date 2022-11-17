import { Action, createReducer, on } from '@ngrx/store';
import { saveArtistId } from '../actions/artist';

export interface Artist {
  id: string;
}

export const initialState: Artist = {
  id: '',
};

export const ArtistReducer = createReducer(
  initialState,
  on(saveArtistId, (state, payload) => {
    return { ...state, id: payload.id };
  })
);
