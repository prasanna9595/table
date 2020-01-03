import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { OtTabsComponent } from './ot-tabs/ot-tabs.component';

@NgModule({
    declarations: [OtTabsComponent],
    imports: [
        CommonModule
    ],
    exports: [OtTabsComponent]
})
export class OtTabsModule { }
