import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormVideoComponent } from './edit-form-video.component';

describe('EditFormVideoComponent', () => {
  let component: EditFormVideoComponent;
  let fixture: ComponentFixture<EditFormVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
