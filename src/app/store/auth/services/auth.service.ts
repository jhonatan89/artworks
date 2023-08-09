import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: User) {
    return of({ username: user.username });
  }

  logout() {
    return of(null);
  }
}
