import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtTableComponent } from './ot-table-module/ot-table/ot-table.component';
import { UiHomeComponent } from './ui-home/ui-home.component';
import { OtContextMenuComponent } from './ot-context-menu-module/ot-context-menu/ot-context-menu.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    }
    , {
        path: 'list',
        component: UiHomeComponent
    }
    , {
        path: 'table',
        component: OtTableComponent
    }
    , {
      path: 'context-menu',
      component: OtContextMenuComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]

})
export class UIComponentRoutingModule { }
