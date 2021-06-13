import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './product-list-page.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
