import { OtSubheaderModule } from './ot-subheader-module/ot-subheader.module';
import { DemoComponent } from './ui-home/demo/demo.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UIComponentRoutingModule } from './ui-component-routing.module';
import { UiHomeComponent } from './ui-home/ui-home.component';
import { OtTableModule } from './ot-table-module/ot-table.module';
import { CommonModule } from '@angular/common';
import { OtContextMenuModule } from './ot-context-menu-module/ot-context-menu.module';
import { OtButtonModule } from './ot-button-module/ot-button.module';
import { OtModalModule } from './ot-modal-module/ot-modal.module';
import { OtBreadCrumbModule } from './ot-bread-crumb-module/ot-bread-crumb.module';
import { OtTabsModule } from './ot-tabs-module/ot-tabs.module';
import { OtTooltipDirective } from '../directives/ot-tooltip.directive';
import { OtNotificationModule } from './ot-notfications-module/ot-notifications.module';
import { OtNotificationDemoComponent } from './ui-home/notificationdemo/notification-demo.component';
import { OtDatePickerModule } from './ot-date-picker/ot-date-picker.module';


@NgModule({
  declarations: [UiHomeComponent, DemoComponent, OtTooltipDirective, OtNotificationDemoComponent],
  imports: [
    CommonModule
    , OtTableModule
    , OtContextMenuModule
    , OtButtonModule
    , UIComponentRoutingModule
    , OtModalModule
    , OtTabsModule
    , OtSubheaderModule
    , OtNotificationModule
    , OtModalModule
    , OtBreadCrumbModule
    , OtDatePickerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    OtButtonModule
    , OtNotificationModule
    , OtSubheaderModule
    , OtModalModule
    , OtBreadCrumbModule
    , OtContextMenuModule
  ],
  entryComponents: [DemoComponent],
  providers: []
})
export class UIComponentsModule { }
