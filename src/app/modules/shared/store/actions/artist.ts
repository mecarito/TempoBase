import { createAction, props } from '@ngrx/store';


export const saveArtistId = createAction(
  '[Artist Page] saving of artist Id',
  props<{ id: string; }>()
);
