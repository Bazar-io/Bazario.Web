import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTelInputComponent } from './auth-tel-input.component';

describe('AuthTelInputComponent', () => {
  let component: AuthTelInputComponent;
  let fixture: ComponentFixture<AuthTelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTelInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
