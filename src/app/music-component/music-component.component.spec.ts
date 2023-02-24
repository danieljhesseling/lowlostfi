import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComponentComponent } from './music-component.component';

describe('MusicComponentComponent', () => {
  let component: MusicComponentComponent;
  let fixture: ComponentFixture<MusicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
