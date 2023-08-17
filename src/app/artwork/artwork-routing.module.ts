import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
  ],
})
export class ArtworkRoutingModule {}
