import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './layouts/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
