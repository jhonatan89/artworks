import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ArtCardViewComponent } from './art-card-view/art-card-view.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { GalleryArtContainerComponent } from './gallery/gallery-art-container/gallery-art-container.component';
import { GalleryArtViewComponent } from './gallery/gallery-art-view/gallery-art-view.component';

@NgModule({
  declarations: [
    GalleryArtContainerComponent,
    GalleryArtViewComponent,
    ArtCardViewComponent,
  ],
  imports: [CommonModule, ShareModule, ArtworkRoutingModule],
})
export class ArtworkModule {}
