import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-logout-container',
  templateUrl: './logout-container.component.html',
  styleUrls: ['./logout-container.component.scss'],
})
export class LogoutContainerComponent {
  constructor(private store: Store<any>) {
    this.store.dispatch(logout());
  }
}
