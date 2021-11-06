import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/homepage/homepage.module').then(mod => mod.HomepageModule) },
  { path: 'categoria', loadChildren: () => import('./pages/categoria/categoria.module').then(mod => mod.CategoriaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
