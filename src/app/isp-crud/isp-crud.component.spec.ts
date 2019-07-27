import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspCRUDComponent } from './isp-crud.component';

describe('IspCRUDComponent', () => {
  let component: IspCRUDComponent;
  let fixture: ComponentFixture<IspCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
