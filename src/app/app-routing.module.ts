import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteModule } from './cliente/cliente.module';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
    }  

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ClienteModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
