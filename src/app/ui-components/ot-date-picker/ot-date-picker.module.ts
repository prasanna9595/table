import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtDatePickerComponent } from './ot-date-picker/ot-date-picker.component';

@NgModule({
  declarations: [OtDatePickerComponent],
  imports: [
    CommonModule
  ],
  exports: [OtDatePickerComponent]
})
export class OtDatePickerModule { }
