import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LoginViewComponent } from './login/login-view/login-view.component';

@NgModule({
  declarations: [LoginContainerComponent, LoginViewComponent],
  imports: [CommonModule, ShareModule, AuthRoutingModule],
})
export class AuthModule {}
