import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../../services/headline.service';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.page.html',
  styleUrl: './search.page.scss'
})
export class SearchPage implements OnInit {

  query: string = "";
  results: any[] = [];

  constructor(private headlineService: HeadlineService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof ActivationStart) {
        this.query = res.snapshot.paramMap.get("query")!;
        this.headlineService.getHeadlinesFilterBy("q", this.query).subscribe(data => {
          this.results = data.articles;
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
