import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LoginViewComponent } from './login/login-view/login-view.component';
import { LogoutContainerComponent } from './logout/logout-container/logout-container.component';

@NgModule({
  declarations: [LoginContainerComponent, LoginViewComponent, LogoutContainerComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
