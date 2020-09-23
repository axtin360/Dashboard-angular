import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPruebaComponent } from './mi-prueba.component';

describe('MiPruebaComponent', () => {
  let component: MiPruebaComponent;
  let fixture: ComponentFixture<MiPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
