import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/store/artwork/models/artwork.model';

@Component({
  selector: 'app-art-card-view',
  templateUrl: './art-card-view.component.html',
  styleUrls: ['./art-card-view.component.scss'],
})
export class ArtCardViewComponent {
  @Input() artwork: Artwork = {} as Artwork;
}
