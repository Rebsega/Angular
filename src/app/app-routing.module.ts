import { ExtratoComponent } from './extrato/extrato.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { Routes } from '@angular/router';
import { newTransferComponent } from './newTransfer/newTransfer.component';

export const routes: Routes = [
  {path: '',redirectTo:'extrato',pathMatch: 'full'},
  {path: 'extrato',component:ExtratoComponent},
  {path: 'nova-transferencia',component: newTransferComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
