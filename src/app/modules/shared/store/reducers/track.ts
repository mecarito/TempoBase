import { createReducer, on } from '@ngrx/store';
import { saveTrack } from '../actions/track';
import { TrackState } from 'app-types';

export const initialState: TrackState = {
  images: [],
  previewUrl: '',
  trackName: '',
  artistName: '',
};

export const TrackReducer = createReducer(
  initialState,
  on(saveTrack, (state, payload) => {
    return {
      ...state,
      trackName: payload.trackName,
      artistName: payload.artistName,
      previewUrl: payload.previewUrl,
      images: payload.images,
    };
  })
);
