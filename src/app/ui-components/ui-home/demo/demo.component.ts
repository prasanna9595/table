import { OtModalService } from './../../ot-modal-module/ot-modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ot-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
    isActive:boolean;
    constructor (private modalService : OtModalService) {

    }
 ngOnInit() {
     console.log(this['config']);
 }
 closeModal() {
   this.modalService.removeModalComponent();
 }
}
