import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { getTestScheduler, cold } from 'jasmine-marbles';
import { PrizeService } from './app/prize.service';
import { CardComponent } from './app/card/card.component';
import { throwError } from 'rxjs';

describe('AppComponent', () => {

  // const prizeServiceStub = {
  //   get() {
  //     const prizeData$ = cold('--amount--prize--game--countdown|', {amount: 0, prize: 'Prize', game: 'Game', countdown: 0});
  //     return prizeData$;
  //   }
  // };
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let prizeService: any;

  beforeEach(async(() => {

    prizeService = jasmine.createSpy('PrizeService');
    prizeService.getPrizeData = cold('--amount--prize--game--countdown|', {amount: 50, prize: 'Free Spins', game: 'Gemix', countdown: 25});

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent, CardComponent
      ],
      // providers: [{provde: HttpClient}]
      // providers: [{provide: PrizeService, useValue: prizeService}]
    }).compileComponents();



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have an app-card', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-card'));
  });

});
