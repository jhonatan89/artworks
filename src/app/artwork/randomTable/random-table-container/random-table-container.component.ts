import { Component, OnInit } from '@angular/core';
import { RandomModel } from '../models/random.model';

@Component({
  selector: 'app-random-table-container',
  templateUrl: './random-table-container.component.html',
  styleUrls: ['./random-table-container.component.scss'],
})
export class RandomTableContainerComponent implements OnInit {
  randomData: RandomModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getRandomData();
  }

  getRandomData(recordsLength: number = 10): void {
    this.randomData = this.generateItems(recordsLength);
  }

  generateItem(): RandomModel {
    const id = Math.floor(Math.random() * 1000);
    const names = [
      'Jack',
      'John',
      'Luis',
      'Jhonatan',
      'Modak',
      'Test',
      'Kakaroto',
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const value = Number((Math.random() * 100).toFixed(3));

    return { id, name: randomName, value };
  }

  generateItems(count: number): RandomModel[] {
    const items: RandomModel[] = [];
    for (let i = 0; i < count; i++) {
      items.push(this.generateItem());
    }
    console.log('log', items);

    return items;
  }
}
