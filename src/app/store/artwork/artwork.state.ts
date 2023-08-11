import { Artwork } from './models/artwork.model';

export interface ArtworkState {
  artworks: Artwork[];
  page: number;
  artworkDetail: Artwork | null;
}

export const initialArtworkState: ArtworkState = {
  artworks: [],
  page: 1,
  artworkDetail: null,
};
