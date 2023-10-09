import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogeComponent } from './hoge/hoge.component';
import { FugaComponent } from './fuga/fuga.component';
import { PiyopiyoComponent } from './piyopiyo/piyopiyo.component';

const routes: Routes = [
  { path: '', redirectTo: '/hoge', pathMatch: 'full' },
  { path: 'hoge', component: HogeComponent },
  { path: 'fuga', component: FugaComponent },
  { path: 'piyopiyo', component: PiyopiyoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
