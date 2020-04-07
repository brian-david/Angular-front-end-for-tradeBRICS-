import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBusinessComponentComponent } from './register-business-component.component';

describe('RegisterBusinessComponentComponent', () => {
  let component: RegisterBusinessComponentComponent;
  let fixture: ComponentFixture<RegisterBusinessComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBusinessComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBusinessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
