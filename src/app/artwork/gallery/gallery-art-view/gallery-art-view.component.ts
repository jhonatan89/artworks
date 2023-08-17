import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Artwork } from 'src/app/store/artwork/models/artwork.model';

@Component({
  selector: 'app-gallery-art-view',
  templateUrl: './gallery-art-view.component.html',
  styleUrls: ['./gallery-art-view.component.scss'],
})
export class GalleryArtViewComponent implements OnInit, OnChanges {
  @Input() artworks: Artwork[] | null = [];
  filteredArtwork: Artwork[] | null = [];
  filter: string = '';

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['artworks'].isFirstChange()) {
      this.filterArtworks();
    }
  }

  filterArtworks(value: string = ''): void {
    if (value === '') {
      this.filteredArtwork = this.artworks;
      return;
    }
    this.filteredArtwork =
      this.artworks?.filter((artwork) =>
        artwork.title.toLowerCase().includes(value.toLowerCase())
      ) ?? [];
  }
}
