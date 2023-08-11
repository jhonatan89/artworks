import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';
import { User } from 'src/app/store/auth/models/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  constructor(private store: Store<{ auth: any }>) {}

  doLogin(user: User): void {
    this.store.dispatch(login({ user }));
  }
}
