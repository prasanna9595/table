import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtContextMenuComponent } from './ot-context-menu/ot-context-menu.component';
import { OtContextMenuDirective } from './ot-context-menu.directive';

@NgModule({
  declarations: [OtContextMenuComponent, OtContextMenuDirective],
  imports: [
    CommonModule
  ],
  exports: [
    OtContextMenuComponent,
    OtContextMenuDirective
  ]
})
export class OtContextMenuModule { }
