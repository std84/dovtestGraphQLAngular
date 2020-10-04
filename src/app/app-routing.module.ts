import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { CountryResolver } from './_resolvers/country.resolver';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'country/:id', component: CountryComponent, resolve: {users: CountryResolver} },
  {path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
