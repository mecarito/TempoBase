import { createAction, props } from '@ngrx/store';

export const saveAccessToken = createAction(
  '[Welcome Page] saved access token to store',
  props<{ accessToken: string }>()
);
