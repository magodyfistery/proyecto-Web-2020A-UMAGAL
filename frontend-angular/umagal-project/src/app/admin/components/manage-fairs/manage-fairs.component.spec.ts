import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFairsComponent } from './manage-fairs.component';

describe('ManageFairsComponent', () => {
  let component: ManageFairsComponent;
  let fixture: ComponentFixture<ManageFairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
