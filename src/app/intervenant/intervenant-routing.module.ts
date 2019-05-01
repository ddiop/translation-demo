import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntervenantComponent} from './intervenant.component';


const routes: Routes = [
  { path: '', redirectTo: 'intervenant', pathMatch: 'full' },
  { path: 'intervenant', component: IntervenantComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntervenantRoutingModule { }
