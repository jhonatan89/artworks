import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadArtworks } from 'src/app/store/artwork/artwork.actions';
import { Artwork } from 'src/app/store/artwork/models/artwork.model';

@Component({
  selector: 'app-gallery-art-container',
  templateUrl: './gallery-art-container.component.html',
  styleUrls: ['./gallery-art-container.component.scss'],
})
export class GalleryArtContainerComponent implements OnInit {
  artworks$: Observable<Artwork[]>;

  constructor(private store: Store<{ artwork: any }>) {
    this.artworks$ = store.select((state) => state.artwork.artworks.data);
  }

  ngOnInit(): void {
    this.store.dispatch(loadArtworks());
  }
}
