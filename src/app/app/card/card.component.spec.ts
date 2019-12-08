import { element } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { PrizeService } from '../prize.service';
import { CardState } from './card-state.enum';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;



  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show timer when enabled', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.countdownEnabled = true;
    expect(compiled.querySelector('.timer'));
  });

  it('should hide timer when disabled', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.countdownEnabled = false;
    expect(compiled.querySelector('.timer')).toBeNull();
  });

  it('show apply default styles when prize is not claimed', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.cardState = CardState.DEFAULT;
    expect(compiled.querySelector('.default-text'));
    expect(compiled.querySelector('.default-button'));
  });

  it('show ticked styles when prize is claimed', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.cardState = CardState.TICKED;
    expect(compiled.querySelector('.ticked-text'));
    expect(compiled.querySelector('.ticked-button'));
  });



  // it('should show correct message after claim', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.base-text').textContent).toContain('You\'ve 50 Free Spins to use now');
  // });
});
