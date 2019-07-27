import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspDashboardComponent } from './isp-dashboard.component';

describe('IspDashboardComponent', () => {
  let component: IspDashboardComponent;
  let fixture: ComponentFixture<IspDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
