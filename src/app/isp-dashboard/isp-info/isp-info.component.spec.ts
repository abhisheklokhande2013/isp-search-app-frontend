import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspInfoComponent } from './isp-info.component';

describe('IspInfoComponent', () => {
  let component: IspInfoComponent;
  let fixture: ComponentFixture<IspInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
