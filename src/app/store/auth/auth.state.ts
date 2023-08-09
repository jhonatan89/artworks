import { User } from './models/user.model';

// auth/auth.state.ts
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};
