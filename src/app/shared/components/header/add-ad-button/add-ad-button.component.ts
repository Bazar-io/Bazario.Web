import { Component, DestroyRef, inject, input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-ad-button',
  imports: [NgClass],
  templateUrl: './add-ad-button.component.html',
  styleUrl: './add-ad-button.component.scss'
})
export class AddAdButtonComponent {
  isMobile: boolean = false;
  text = input.required<string>();

  observer = inject(BreakpointObserver);
  destroy$ = inject(DestroyRef);

  ngOnInit() {
    this.subscribeOnBreakpointObserver();
  }
  
  private subscribeOnBreakpointObserver() {
    return this.observer
      .observe(['(max-width: 700px)'])
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }
}
