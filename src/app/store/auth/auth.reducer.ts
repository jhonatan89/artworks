import { createReducer, on } from '@ngrx/store';
import { loginError, loginSuccess, logoutSuccess } from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: '',
  })),
  on(loginError, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error: error,
  })),
  on(logoutSuccess, (state) => ({ ...state, ...initialAuthState }))
);
