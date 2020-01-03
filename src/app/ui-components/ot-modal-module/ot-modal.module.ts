
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtModalComponent } from './ot-modal/ot-modal.component';
@NgModule({
    declarations: [OtModalComponent],
    imports: [
        CommonModule
    ],
    exports : [OtModalComponent]
})
export class OtModalModule { }
