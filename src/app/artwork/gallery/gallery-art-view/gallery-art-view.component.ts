import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/store/artwork/models/artwork.model';

@Component({
  selector: 'app-gallery-art-view',
  templateUrl: './gallery-art-view.component.html',
  styleUrls: ['./gallery-art-view.component.scss'],
})
export class GalleryArtViewComponent {
  @Input() artworks: Artwork[] | null = [];
}
