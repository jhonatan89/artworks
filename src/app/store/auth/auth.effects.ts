import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import {
  login,
  loginError,
  loginSuccess,
  logout,
  logoutSuccess,
} from './auth.actions';
import { AuthService } from './services/auth.service'; // Crea este servicio para manejar la autenticación

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      mergeMap(({ user }) =>
        this.authService.login(user).pipe(
          map((userResp) => loginSuccess({ user: userResp })),
          catchError((error) => of(loginError({ error: error.message })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        exhaustMap(({ user }) => {
          this.authService.setToken(user);
          return this.router.navigate(['home']);
        })
      );
    },
    { dispatch: false }
  );

  logoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logoutSuccess),
        exhaustMap(() => {
          this.authService.clearToken();
          return this.router.navigate(['/auth/login']);
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => logoutSuccess()),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
