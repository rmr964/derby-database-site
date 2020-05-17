import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InsightComponent  } from './insight.component';
import { CleanComponent  } from './clean/clean.component';
import { GarageComponent } from './garage/garage.component';
import { RetailComponent } from './retail/retail.component';

const routes: Routes = [
  { path: '', component: InsightComponent },
  { path: 'retail', component: RetailComponent },
  { path: 'garage', component: GarageComponent },
  { path: 'clean', component: CleanComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }
