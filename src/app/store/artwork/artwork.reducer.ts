import { createReducer, on } from '@ngrx/store';
import { artworksLoadedSuccess } from './artwork.actions';
import { initialArtworkState } from './artwork.state';

export const artworkReducer = createReducer(
  initialArtworkState,
  on(artworksLoadedSuccess, (state, { artworks }) => ({
    ...state,
    artworks: artworks,
  }))
);
