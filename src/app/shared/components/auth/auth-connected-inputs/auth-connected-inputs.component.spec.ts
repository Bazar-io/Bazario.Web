import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthConnectedInputsComponent } from './auth-connected-inputs.component';

describe('AuthConnectedInputsComponent', () => {
  let component: AuthConnectedInputsComponent;
  let fixture: ComponentFixture<AuthConnectedInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthConnectedInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthConnectedInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
