import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CartComponent } from '../cart/cart/cart.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:"menu",
        loadChildren: () => import('../products/product.module').then(m => m.ProductModule)
      },
      {
        path:"cart",
        component: CartComponent
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
