import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Headline } from '../models/headline.model';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {

  constructor(private http: HttpClient, @Inject("API_URL") private baseUrl: string) { }

  getHeadlines(language: string = "en") {
    return this.http.get<Headline>(`${this.baseUrl}&top-headlines&language=${language}`);
  }

  getHeadlinesByCategory(category: string) {
    return this.http.get<Headline>(`${this.baseUrl}&category=${category}`);
  }

  getHeadlinesByPage({ language = "en", pageSize = 10, page = 1 }) {
    return this.http.get<Headline>(`${this.baseUrl}&language=${language}&pageSize=${pageSize}&page=${page}`);
  }

  getHeadlinesFilterBy(filter: "country" | "category" | "q", value: string) {
    return this.http.get<Headline>(`${this.baseUrl}&${filter}=${value}`);
  }

}
