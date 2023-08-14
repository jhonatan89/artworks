import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';
import { UserLogin } from 'src/app/store/auth/models/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent {
  constructor(private store: Store<{ auth: any }>) {}

  doLogin(user: UserLogin): void {
    this.store.dispatch(login({ user }));
  }
}
