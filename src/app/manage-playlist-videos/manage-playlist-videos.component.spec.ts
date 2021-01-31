import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlaylistVideosComponent } from './manage-playlist-videos.component';

describe('ManagePlaylistVideosComponent', () => {
  let component: ManagePlaylistVideosComponent;
  let fixture: ComponentFixture<ManagePlaylistVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePlaylistVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlaylistVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
