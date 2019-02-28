import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharMapPage } from './phar-map.page';

describe('PharMapPage', () => {
  let component: PharMapPage;
  let fixture: ComponentFixture<PharMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
