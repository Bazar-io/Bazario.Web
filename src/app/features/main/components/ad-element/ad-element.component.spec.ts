import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdElementComponent } from './ad-element.component';

describe('AdElementComponent', () => {
  let component: AdElementComponent;
  let fixture: ComponentFixture<AdElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
