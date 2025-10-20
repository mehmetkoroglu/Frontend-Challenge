import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { CategoryPage } from './pages/category/category.page';
import { AboutPage } from './pages/about/about.page';
import { FilterPage } from './pages/filter/filter.page';
import { SearchPage } from './pages/search/search.page';

export const routes: Routes = [
    { path: "", component: MainPage },
    { path: "category", component: FilterPage },
    { path: "category/:categoryName", component: CategoryPage },
    { path: "about", component: AboutPage },
    { path: "search/:query", component: SearchPage }
];
