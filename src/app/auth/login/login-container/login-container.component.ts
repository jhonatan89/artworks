import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { login } from 'src/app/store/auth/auth.actions';
import { User } from 'src/app/store/auth/models/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  error$: Observable<string>;
  constructor(private store: Store<{ auth: any }>) {
    this.error$ = this.store.select('auth').pipe(map((auth) => auth.error));
  }

  doLogin(user: User): void {
    this.store.dispatch(login({ user }));
  }
}
