import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightRoutingModule } from './insight-routing.module';

import { InsightComponent } from './insight.component';
import { CleanComponent } from './clean/clean.component';
import { RetailComponent } from './retail/retail.component';
import { GarageComponent } from './garage/garage.component';


@NgModule({
  declarations: [InsightComponent, CleanComponent, RetailComponent, GarageComponent],
  imports: [
    CommonModule,
    InsightRoutingModule
  ]
})
export class InsightModule { }
