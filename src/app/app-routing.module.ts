import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
{ path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }, 
{ path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
