import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecintervalsComponent } from './components/recintervals/recintervals.component';

const routes: Routes = [
  { path: 'reconnaitre-les-intervalles', component: RecintervalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
