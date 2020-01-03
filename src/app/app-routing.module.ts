import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UIComponentsModule } from './ui-components/ui-components.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  , {
    path: 'uicomponents',
    loadChildren: () => import('./ui-components/ui-components.module').then(ui => ui.UIComponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
