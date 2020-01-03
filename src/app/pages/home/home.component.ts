import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  redirectTo() {
    /* tslint:disable:no-string-literal */
    this.router.navigateByUrl('uicomponents');
  }

}
