import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdButtonComponent } from './add-ad-button.component';

describe('AddAdButtonComponent', () => {
  let component: AddAdButtonComponent;
  let fixture: ComponentFixture<AddAdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
