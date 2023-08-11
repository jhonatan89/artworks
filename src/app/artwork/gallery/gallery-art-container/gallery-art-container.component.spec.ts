import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArtContainerComponent } from './gallery-art-container.component';

describe('GalleryArtContainerComponent', () => {
  let component: GalleryArtContainerComponent;
  let fixture: ComponentFixture<GalleryArtContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryArtContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryArtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
