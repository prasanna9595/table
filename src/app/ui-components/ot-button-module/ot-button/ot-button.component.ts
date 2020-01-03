import { Component, OnInit, Input } from '@angular/core';
import { OtButton } from '../ot-button.interface';

@Component({
  selector: 'crp-ot-button',
  templateUrl: './ot-button.component.html',
  styleUrls: ['./ot-button.component.scss']
})
export class OtButtonComponent implements OnInit {
  @Input() buttons: OtButton[];
  constructor() { }

  ngOnInit() {
    console.log(this.buttons);
  }

  getStyle(type, size) {
    let className;
    if (size === 'Large') {
      if (type === 'Basic') {
        className = 'ot-btn';
      } else if (type === 'Primary') {
        className = 'ot-btn ot-btn--is-primary';
      } else if (type === 'Secondary') {
        className = 'ot-btn ot-btn--is-secondary';
      }
    } else if (size === 'Small') {
      if (type === 'Basic') {
        className = 'ot-btn ot-btn--is-micro';
      } else if (type === 'Primary') {
        className = 'ot-btn ot-btn--is-primary ot-btn--is-micro';
      } else if (type === 'Secondary') {
        className = 'ot-btn ot-btn--is-secondary ot-btn--is-micro';
      }
    }
    return className;
  }
}
