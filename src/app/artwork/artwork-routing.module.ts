import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryArtContainerComponent } from './gallery/gallery-art-container/gallery-art-container.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryArtContainerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ArtworkRoutingModule {}
