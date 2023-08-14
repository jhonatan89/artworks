import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCardViewComponent } from './art-card-view.component';

describe('ArtCardViewComponent', () => {
  let component: ArtCardViewComponent;
  let fixture: ComponentFixture<ArtCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
