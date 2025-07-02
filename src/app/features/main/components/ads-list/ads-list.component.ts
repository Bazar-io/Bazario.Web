import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';
import { AdElementComponent } from '../ad-element/ad-element.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { Ad } from '../../models/ad';
import { ads } from '../../temp';

@Component({
  selector: 'app-ads-list',
  imports: [AdElementComponent, InfiniteScrollDirective, NgxSpinnerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.scss'
})
export class AdsListComponent {
  ads = signal(ads);
  tempAds = signal<Ad[]>([]);
  currentPage = 1;
  itemsPerPage = 12;
  isLastPage = false;
  scrollDisabled = false;
  nextPageLoading = false;

  spinner = inject(NgxSpinnerService);

  ngOnInit() {
    this.loadNextAds(true);
  }

  async onScroll() {
    await this.loadNextAds();
  }

  scrollUnavailabe() {
    return this.isLastPage || this.scrollDisabled;
  }

  private async loadNextAds(firstLoad = false) {
    if (this.isLastPage) {
      return;
    }

    if (!firstLoad) {
      this.startLoadingNextPages();
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    const nextAds = this.ads().slice(start, end);

    if (nextAds.length < this.itemsPerPage) {
      this.tempAds.set([...this.tempAds(), ...nextAds]);
      this.isLastPage = true;
      this.stopLoadingNextPages();
      return;
    } else if (nextAds.length === 0) {
      this.isLastPage = true;
      this.stopLoadingNextPages();
      return;
    }

    this.tempAds.set([...this.tempAds(), ...nextAds]);
    this.currentPage++;

    this.stopLoadingNextPages();
  }

  private startLoadingNextPages() {
    this.scrollDisabled = true;
    this.nextPageLoading = true;
    this.spinner.show();
  }

  private stopLoadingNextPages() {
    this.scrollDisabled = false;
    this.nextPageLoading = false;
    this.spinner.hide();
  }
}
