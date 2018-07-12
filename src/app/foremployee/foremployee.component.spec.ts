import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemployeeComponent } from './foremployee.component';

describe('ForemployeeComponent', () => {
  let component: ForemployeeComponent;
  let fixture: ComponentFixture<ForemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
