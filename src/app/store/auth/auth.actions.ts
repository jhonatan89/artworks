import { createAction, props } from '@ngrx/store';
import { User, UserLogin } from './models/user.model';

export const login = createAction('[Auth] Login', props<{ user: UserLogin }>());
export const loginSuccess = createAction(
  '[Auth API] User logged Success',
  props<{ user: User }>()
);
export const logout = createAction('[Auth] Logout');
