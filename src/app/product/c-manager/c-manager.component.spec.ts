import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CManagerComponent } from './c-manager.component';

describe('CManagerComponent', () => {
  let component: CManagerComponent;
  let fixture: ComponentFixture<CManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
