import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent implements OnInit {

  query: string = "";
  activePage: string = "/";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof ActivationEnd) {
        let idx = window.location.pathname.lastIndexOf("/");
        this.activePage = window.location.pathname.slice(idx);
      }
    });
  }

}
