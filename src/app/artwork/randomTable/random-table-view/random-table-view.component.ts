import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-random-table-view',
  templateUrl: './random-table-view.component.html',
  styleUrls: ['./random-table-view.component.scss'],
})
export class RandomTableViewComponent {
  @Input() randomData!: any[];
  @Output() generateRandomDataEvent = new EventEmitter<boolean>();

  constructor() {}

  generateDate(): void {
    this.generateRandomDataEvent.emit(true);
  }
}
