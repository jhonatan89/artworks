import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

const components = [
  InputTextModule,
  CardModule,
  ButtonModule,
  StyleClassModule,
  TableModule,
  ImageModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class PrimeComponentsModule {}
