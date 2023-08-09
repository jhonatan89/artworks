import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: authReducer,
    }),
    EffectsModule.forRoot([AuthEffects]),
  ],
})
export class AppStoreModule {}
