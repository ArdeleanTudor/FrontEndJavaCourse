import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormVideoComponent } from './add-form-video.component';

describe('AddFormVideoComponent', () => {
  let component: AddFormVideoComponent;
  let fixture: ComponentFixture<AddFormVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
