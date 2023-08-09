import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, { user }) => ({ ...state, isAuthenticated: true, user })),
  on(logout, (state) => ({ ...state, isAuthenticated: false, user: null }))
);
