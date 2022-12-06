import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedSongPageComponent } from './liked-song-page.component';

describe('LikedSongPageComponent', () => {
  let component: LikedSongPageComponent;
  let fixture: ComponentFixture<LikedSongPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedSongPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedSongPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
