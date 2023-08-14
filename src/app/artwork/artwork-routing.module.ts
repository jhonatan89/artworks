import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { GalleryArtContainerComponent } from './gallery/gallery-art-container/gallery-art-container.component';
import { RandomTableContainerComponent } from './randomTable/random-table-container/random-table-container.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryArtContainerComponent,
  },
  {
    path: 'random-table',
    component: RandomTableContainerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
})
export class ArtworkRoutingModule {}
