import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTableContainerComponent } from './random-table-container.component';

describe('RandomTableContainerComponent', () => {
  let component: RandomTableContainerComponent;
  let fixture: ComponentFixture<RandomTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTableContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
