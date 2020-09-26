import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatArtworkComponent } from './creat-artwork.component';

describe('CreatArtworkComponent', () => {
  let component: CreatArtworkComponent;
  let fixture: ComponentFixture<CreatArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
