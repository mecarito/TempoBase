import { createSelector } from '@ngrx/store';
import { State as StateNamespace } from 'src/app/types';

interface AppState {
  auth: StateNamespace.Auth
} 

export const selectAuth = (state: AppState ) => state.auth

export const selectAccessToken = createSelector(
   selectAuth,
  (state: StateNamespace.Auth) => state.access_token
);
