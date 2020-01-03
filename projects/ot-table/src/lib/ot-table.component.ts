import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ot-table',
  template: `
    <h1>
      {{title}}
    </h1>
  `,
  styles: []
})
export class OtTableComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Welcome to Ot Table';
  }

}
