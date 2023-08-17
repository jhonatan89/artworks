import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RandomModel } from '../models/random.model';

@Component({
  selector: 'app-random-table-view',
  templateUrl: './random-table-view.component.html',
  styleUrls: ['./random-table-view.component.scss'],
})
export class RandomTableViewComponent {
  @Input() randomData!: RandomModel[];
  @Output() generateRandomDataEvent = new EventEmitter<boolean>();

  constructor() {}

  generateDate(): void {
    this.generateRandomDataEvent.emit(true);
  }
}
