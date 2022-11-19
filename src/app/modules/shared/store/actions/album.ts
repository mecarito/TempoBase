import { createAction, props } from '@ngrx/store';

export const saveAlbumId = createAction(
  '[Album Page] saving of album Id',
  props<{ id: string }>()
);
