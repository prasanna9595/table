
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'ot-modal',
  templateUrl: './ot-modal.component.html',
  styleUrls: ['./ot-modal.component.scss'],
})
export class OtModalComponent implements OnInit {
@Input() width : String; //Optional Parameter , can be useful in some cases
@Input() height : String; // Optional
  constructor() { }
  ngOnInit(){
  }

}
