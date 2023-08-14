import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { ArtCardViewComponent } from './components/art-card-view/art-card-view.component';
import { GalleryArtContainerComponent } from './gallery/gallery-art-container/gallery-art-container.component';
import { GalleryArtViewComponent } from './gallery/gallery-art-view/gallery-art-view.component';
import { RandomTableContainerComponent } from './randomTable/random-table-container/random-table-container.component';
import { RandomTableViewComponent } from './randomTable/random-table-view/random-table-view.component';

@NgModule({
  declarations: [
    GalleryArtContainerComponent,
    GalleryArtViewComponent,
    RandomTableViewComponent,
    RandomTableContainerComponent,
    ArtCardViewComponent,
  ],
  imports: [CommonModule, ShareModule, ArtworkRoutingModule],
})
export class ArtworkModule {}
