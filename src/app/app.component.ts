import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'artworks';
  isAuthenticated$: Observable<boolean>;
  constructor(private store: Store<any>) {
    this.isAuthenticated$ = this.store
      .select('auth')
      .pipe(map((auth) => auth.isAuthenticated));
  }
}
