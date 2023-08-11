import { createAction, props } from '@ngrx/store';
import { Artwork } from './models/artwork.model';

export const loadArtworks = createAction('[Artwork] Load artworks');
export const artworksLoadedSuccess = createAction(
  '[Artwork] Loaded Success',
  props<{ artworks: Artwork[] }>()
);
