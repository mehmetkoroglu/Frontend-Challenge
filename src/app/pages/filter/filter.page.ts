import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../../services/headline.service';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.page.html',
  styleUrl: './filter.page.scss'
})
export class FilterPage implements OnInit {

  searchCountry: string = "tr";
  searchCategory: string = "sports";
  searchQuery: string = "technology";
  filteredHeadlines: any[] = [];

  constructor(private headlineService: HeadlineService) { }

  ngOnInit(): void { }

  getFiltered(filter: "country" | "category" | "q", value: string) {
    this.headlineService.getHeadlinesFilterBy(filter, value).subscribe(res => {
      this.filteredHeadlines = res.articles;
    });

    console.log(value);
    
  }

  dateFixer(dateTime: number) {
    let date = new Date(dateTime);
    let month = date.toLocaleString('en', { month: 'short' });
    let day = date.getDay();
    return `${month} ${day}`;
  }
}
