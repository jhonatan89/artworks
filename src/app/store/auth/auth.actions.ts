import { createAction, props } from '@ngrx/store';
import { User } from './models/user.model';

export const login = createAction('[Auth] Login', props<{ user: User }>());
export const loginSuccess = createAction(
  '[Auth API] User logged Success',
  props<{ user: User }>()
);
export const loginError = createAction(
  '[Auth API] User logged failed',
  props<{ error: string }>()
);
export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Successfully');
