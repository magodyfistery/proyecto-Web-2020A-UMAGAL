import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArtworkComponent } from './table-artwork.component';

describe('TableArtworkComponent', () => {
  let component: TableArtworkComponent;
  let fixture: ComponentFixture<TableArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
