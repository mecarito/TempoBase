import { createAction, props } from '@ngrx/store';
import { TrackImages } from 'app-types';

export const saveTrack = createAction(
  '[search Page] saving track',
  props<{
    images: TrackImages[];
    previewUrl: string;
    trackName: string;
    artistName: string;
  }>()
);
