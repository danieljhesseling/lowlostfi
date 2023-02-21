import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSentenceComponent } from './random-sentence.component';

describe('RandomSentenceComponent', () => {
  let component: RandomSentenceComponent;
  let fixture: ComponentFixture<RandomSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomSentenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
