import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtTableComponent } from './ot-table/ot-table.component';
import { OtContextMenuModule } from '../ot-context-menu-module/ot-context-menu.module';
import { OtTooltipDirective } from 'src/app/directives/ot-tooltip.directive';

@NgModule({
  declarations: [OtTableComponent],
  imports: [
    CommonModule,
    OtContextMenuModule
  ]
  , exports: [OtTableComponent, OtContextMenuModule]
})

export class OtTableModule { }
