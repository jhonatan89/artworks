import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserLogin } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: UserLogin) {
    //fake response
    return of({
      username: user.username,
      token: 'epabcde13456',
      userId: '123456',
    });
  }

  logout() {
    return of(null);
  }
}
