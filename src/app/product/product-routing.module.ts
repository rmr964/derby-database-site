import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { CManagerComponent } from './c-manager/c-manager.component';


const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'cmanager', component: CManagerComponent },
  { path: 'insight', loadChildren: () => import('./insight/insight.module').then(m => m.InsightModule) }
]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
