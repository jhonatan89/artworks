import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fakeUserAPI = 'https://64d6d2c72a017531bc12dcc7.mockapi.io/api/users';
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    //fake response
    return this.http.get<User[]>(this.fakeUserAPI).pipe(
      map((userResp: User[]) => {
        const filterUsers = userResp.filter(
          (userR: User) => userR.username === user.username
        );
        if (filterUsers.length > 0) {
          return { ...filterUsers[0], token: 'fake-token' };
        } else {
          throw new Error('User not found');
        }
      })
    );
  }

  logout(): Observable<null> {
    return of(null);
  }

  setToken(user: User): void {
    localStorage.setItem('token', `${user.username}.${user.token}`);
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
