import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeComponentsModule } from '../prime-components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, PrimeComponentsModule],
  exports: [ReactiveFormsModule, PrimeComponentsModule],
})
export class ShareModule {}
