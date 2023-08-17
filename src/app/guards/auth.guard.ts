import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loginSuccess } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private store: Store<any>, private _router: Router) {}

  /**
   * Can activate
   *
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._check();
  }

  private _check(): Observable<boolean> {
    return this.store.select('auth').pipe(
      map((auth) => {
        if (!auth.isAuthenticated) {
          if (localStorage.getItem('token')) {
            this.store.dispatch(
              loginSuccess({
                user: {
                  username: localStorage.getItem('token')?.split('.')?.[0],
                  token: localStorage.getItem('token'),
                },
              })
            );
          } else {
            this._router.navigate(['/auth/login']);
          }
        }
        return auth.isAuthenticated;
      })
    );
  }
}
