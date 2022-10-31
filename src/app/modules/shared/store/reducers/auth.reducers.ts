import { Action, createReducer, on } from '@ngrx/store';
import { State } from 'src/app/types';
import { saveAccessToken } from '../actions/auth.actions';

export const initialState: State.Auth = {
  access_token: '',
};

export const authReducer = createReducer(
  initialState,
  on(
    saveAccessToken,
    (state, { accessToken }) => ({ access_token: accessToken})
  )
);
