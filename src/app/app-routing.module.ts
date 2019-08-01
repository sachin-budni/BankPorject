import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { BankComponent } from './bank/bank.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {path:'banks',component:BanksComponent},
  {path:'banks/:id',component:BankComponent},
  {path:'favorite',component:FavoriteComponent},
  {path:'',redirectTo:'banks',pathMatch:"full"},
  {path:'**',redirectTo:'banks',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
