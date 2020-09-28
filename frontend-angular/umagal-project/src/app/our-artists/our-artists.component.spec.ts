import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurArtistsComponent } from './our-artists.component';

describe('OurArtistsComponent', () => {
  let component: OurArtistsComponent;
  let fixture: ComponentFixture<OurArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
