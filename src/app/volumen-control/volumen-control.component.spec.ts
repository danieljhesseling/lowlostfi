import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumenControlComponent } from './volumen-control.component';

describe('VolumenControlComponent', () => {
  let component: VolumenControlComponent;
  let fixture: ComponentFixture<VolumenControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumenControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumenControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
