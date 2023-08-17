import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss'],
})
export class MenuToolbarComponent implements OnInit, OnDestroy {
  currentUser: string = 'User';
  unsubscribe$ = new Subject<void>();
  constructor(private router: Router, private store: Store<any>) {
    this.store
      .select('auth')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((auth) => {
        if (auth.isAuthenticated) {
          this.currentUser = auth.user.username;
        }
      });
  }

  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.router.navigate(['/home']);
        },
      },
      {
        label: 'Random table',
        icon: 'pi pi-fw pi-calendar',
        command: () => {
          this.router.navigate(['/home/random-table']);
        },
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.router.navigate(['/auth/logout']);
        },
      },
    ];
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
