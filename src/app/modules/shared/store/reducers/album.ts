import {  createReducer, on } from '@ngrx/store';
import { saveAlbumId } from '../actions';

 interface Album {
  id: string;
}

 const initialState: Album = {
  id: '',
};

export const AlbumReducer = createReducer(
  initialState,
  on(saveAlbumId, (state, payload) => {
    return { ...state, id: payload.id };
  })
);
