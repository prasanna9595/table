import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtBreadCrumbComponent } from './ot-bread-crumb/ot-bread-crumb.component';
import { OtContextMenuModule } from '../ot-context-menu-module/ot-context-menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OtBreadCrumbComponent],
  imports: [
    CommonModule,
    OtContextMenuModule,
    RouterModule
  ],
  exports : [OtBreadCrumbComponent]
})
export class OtBreadCrumbModule { }
