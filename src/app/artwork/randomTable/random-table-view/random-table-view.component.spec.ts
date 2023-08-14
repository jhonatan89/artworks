import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTableViewComponent } from './random-table-view.component';

describe('RandomTableViewComponent', () => {
  let component: RandomTableViewComponent;
  let fixture: ComponentFixture<RandomTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTableViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
