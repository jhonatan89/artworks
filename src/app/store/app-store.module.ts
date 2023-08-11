import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ArtworkEffects } from './artwork/artwork.effects';
import { artworkReducer } from './artwork/artwork.reducer';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: authReducer,
      artwork: artworkReducer,
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Artwork App',
      logOnly: false,
    }),
    EffectsModule.forRoot([AuthEffects, ArtworkEffects]),
  ],
})
export class AppStoreModule {}
