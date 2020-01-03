import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtButtonComponent } from './ot-button/ot-button.component';

@NgModule({
    declarations: [OtButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [OtButtonComponent]
})
export class OtButtonModule { }
