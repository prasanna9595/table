import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OtTabs } from '../ot-tabs.interface';

@Component({
  selector: 'crp-ot-tabs',
  templateUrl: './ot-tabs.component.html',
  styleUrls: ['./ot-tabs.component.scss']
})
export class OtTabsComponent implements OnInit {
  @Input() tabs: OtTabs[];
  @Input() align?: string;
  @Input() type?: string;
  @Output() clickSelected = new EventEmitter<{ index: number, Tab: string }>();
  style: string;

  constructor() { }

  ngOnInit() {
    console.log(this.tabs);
    this.getStyle();
  }
  getStyle() {
    /* assign style for ul */
    if ( this.type === 'Secondary' ) {
      this.style = 'ot-tabs ot-tabs--is-secondary';
    } else if (this.type === 'Business') {
      this.style = 'ot-tabs ot-tabs--is-business';
    } else {
      if (this.align === 'right') {
        this.style = 'ot-tabs ot-tabs--is-right-aligned';
      } else if (this.align === 'center') {
        this.style = 'ot-tabs ot-tabs--is-center-aligned';
      } else {
        this.style = 'ot-tabs';
      }
    }
  }

  getActiveTab(isActive) {
    /* assign style for li */
    let style = '';
    if (isActive) {
      style = 'ot-tabs__item ot-tabs__item--is-active';
    } else {
      style = 'ot-tabs__item';
    }
    return style;
  }
  getClickedTab(tab, i) {
    console.log('clicked tab>>' + tab.name);
    for (const value of this.tabs) {
      console.log('value>>' + value.name);
      if (tab.name === value.name) {
        value.isActive = true;
        this.getActiveTab(value.isActive);
      } else {
        value.isActive = false;
        this.getActiveTab(value.isActive);
      }
    }
    this.clickSelected.emit({
      index: i,
      Tab: tab
    });
  }
}
