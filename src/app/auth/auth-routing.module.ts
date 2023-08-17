import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LogoutContainerComponent } from './logout/logout-container/logout-container.component';

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent },
  { path: 'logout', component: LogoutContainerComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
