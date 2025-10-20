import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../../services/headline.service';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.page.html',
  styleUrl: './category.page.scss'
})
export class CategoryPage implements OnInit {

  headlines: any;
  categoryName: string = "";

  constructor(private headlineService: HeadlineService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof ActivationStart) {
        let categoryName = res.snapshot.paramMap.get('categoryName')!;
        this.headlineService.getHeadlinesByCategory(categoryName).subscribe(data => {
          this.headlines = data.articles;
        });
      }
    });
  }

  dateFixer(dateTime: number) {
    let date = new Date(dateTime);
    let month = date.toLocaleString('en', { month: 'short' });
    let day = date.getDay();
    return `${month} ${day}`;
  }
}
