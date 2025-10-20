import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../../services/headline.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss'
})
export class MainPage implements OnInit {

  page: number = 1;
  pageSize: number = 5;
  activeNumber: number = 1;

  headlinesForSlider: any[] = [];
  headlinesForMainPage: any[] = [];

  constructor(private headlineService: HeadlineService) { }

  ngOnInit(): void {
    this.headlineService.getHeadlines().subscribe(res => {
      let firstThreeItems = res.articles.slice(0, 3);
      this.headlinesForSlider = firstThreeItems;

      let headlinesItems = res.articles.slice(3, this.pageSize + 3);
      this.headlinesForMainPage = headlinesItems;

      let headlinesLength = res.articles.slice(3).length;
      this.page = Math.ceil(headlinesLength / this.pageSize);
    });
  }

  getHeadlines(pageNumber: number) {
    this.headlineService.getHeadlinesByPage({ page: pageNumber, pageSize: this.pageSize })
      .subscribe(res => {
        this.headlinesForMainPage = res.articles;
        this.activeNumber = pageNumber;
      })
  }

  createRange(num: number) {
    return new Array(num).fill(0).map((n, index) => index + 1);
  }

  dateFixer(dateTime: number) {
    let date = new Date(dateTime);
    let month = date.toLocaleString('en', { month: 'short' });
    let day = date.getDay();
    return `${month} ${day}`;
  }

}
