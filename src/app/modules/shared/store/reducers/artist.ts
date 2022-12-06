import {  createReducer, on } from '@ngrx/store';
import { saveArtistId } from '../actions';
 interface Artist {
  id: string;
}
 const initialState: Artist = {
  id: '',
};

export const ArtistReducer = createReducer(
  initialState,
  on(saveArtistId, (state, payload) => {
    return { ...state, id: payload.id };
  })
);
