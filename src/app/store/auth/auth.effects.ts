import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { login, logout } from './auth.actions';
import { AuthService } from './services/auth.service'; // Crea este servicio para manejar la autenticación

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ user }) =>
        this.authService.login(user).pipe(
          map((user) => ({
            type: '[Auth API] User logged Success',
            payload: user,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map((user) => ({
            type: '[Auth API] User logout Success',
            payload: null,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
