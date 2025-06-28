import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchInputComponent } from './header-search-input.component';

describe('HeaderSearchInputComponent', () => {
  let component: HeaderSearchInputComponent;
  let fixture: ComponentFixture<HeaderSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSearchInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
