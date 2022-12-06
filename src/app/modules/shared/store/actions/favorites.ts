import { createAction, props } from '@ngrx/store';
import { Track } from 'app-types';

export const addToFavorite = createAction(
  '[All Page] adding Track to Favorites',
  props<{
    track: Track;
  }>()
);

export const removeFromFavorite = createAction(
  '[All Page] removing Track from Favorites',
  props<{
    track: Track;
  }>()
);
