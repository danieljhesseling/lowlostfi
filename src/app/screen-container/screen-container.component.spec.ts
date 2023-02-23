import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContainerComponent } from './screen-container.component';

describe('ScreenContainerComponent', () => {
  let component: ScreenContainerComponent;
  let fixture: ComponentFixture<ScreenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
