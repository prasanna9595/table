import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'crp-ot-subheader',
  templateUrl: './ot-subheader.component.html',
  styleUrls: ['./ot-subheader.component.scss']
})
export class OtSubheaderComponent implements OnInit {
  @Input() subHeaderBackgroundColor: string;
  @Input() subHeaderHeight: string;
  @Input() subHeaderFlexProperty: string;
  constructor() { }

  ngOnInit() {
  }
  getSubheaderClass() {
    if (this.subHeaderFlexProperty === 'centered') {
      return 'ot-crp-subheader--is-Centered';
    }
    if (this.subHeaderFlexProperty === 'space') {
      return 'ot-crp-subheader--is-space';
    }
  }
}
