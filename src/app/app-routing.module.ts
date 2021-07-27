import { GestprodComponent } from './admin/gestprod/gestprod.component';
import { ClientComponent } from './client/client.component';
import { ErreurComponent } from './erreur/erreur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';

const routes: Routes = [
  {
    path: 'client',component : ClientComponent,
    children : [
      {path : 'home',component : HomeComponent},
      {path: 'about' ,component : AboutComponent}
    ]
  },
  {path : 'admin' , component : GestprodComponent,

  },
  {path : '',redirectTo : '',pathMatch : 'full'},
  {path : '**',component :ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
