import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeComponentsModule } from '../prime-components.module';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';
import { CheckIfGreaterThanDirective } from './directives/check-if-greater-than.directive';

@NgModule({
  declarations: [MenuToolbarComponent, CheckIfGreaterThanDirective],
  imports: [CommonModule, ReactiveFormsModule, PrimeComponentsModule],
  exports: [
    ReactiveFormsModule,
    PrimeComponentsModule,
    MenuToolbarComponent,
    CheckIfGreaterThanDirective,
  ],
})
export class SharedModule {}
