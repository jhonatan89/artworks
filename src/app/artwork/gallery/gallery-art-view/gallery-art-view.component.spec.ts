import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArtViewComponent } from './gallery-art-view.component';

describe('GalleryArtViewComponent', () => {
  let component: GalleryArtViewComponent;
  let fixture: ComponentFixture<GalleryArtViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryArtViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryArtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
