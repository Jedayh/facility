import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusMapPage } from './bus-map.page';

describe('BusMapPage', () => {
  let component: BusMapPage;
  let fixture: ComponentFixture<BusMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
