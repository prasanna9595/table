import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtNotificationComponent } from './ot-notifications/ot-notification.component';

@NgModule({
    declarations: [OtNotificationComponent],
    imports: [
        CommonModule
    ]
    , exports: [OtNotificationComponent]
})
export class OtNotificationModule { }
