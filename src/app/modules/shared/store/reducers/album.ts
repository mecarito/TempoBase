import {  createReducer, on } from '@ngrx/store';
import { saveAlbumId } from '../actions/album';

export interface Album {
  id: string;
}

export const initialState: Album = {
  id: '',
};

export const AlbumReducer = createReducer(
  initialState,
  on(saveAlbumId, (state, payload) => {
    return { ...state, id: payload.id };
  })
);
