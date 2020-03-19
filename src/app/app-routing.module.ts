import { AchatComponent } from './achat/achat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
   { path: '', redirectTo: '/achat', pathMatch: 'full' },
   { path: 'achat', component: AchatComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
