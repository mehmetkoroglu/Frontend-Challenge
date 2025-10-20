import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPage } from './category/category.page';
import { RouterLink } from "@angular/router";
import { AboutPage } from './about/about.page';
import { MainPage } from './main/main.page';
import { FormsModule } from '@angular/forms';
import { FilterPage } from './filter/filter.page';
import { SearchPage } from './search/search.page';

@NgModule({
  declarations: [
    MainPage,
    CategoryPage,
    AboutPage,
    FilterPage,
    SearchPage
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ]
})
export class PagesModule { }
