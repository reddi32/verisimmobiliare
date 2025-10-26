import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VenditaComponent } from './vendita/vendita.component';
import { AffittiComponent } from './affitti/affitti.component';
import { AnzioComponent } from './anzio/anzio.component';
import { ContattiComponent } from './contatti/contatti.component';
import { VenditaPostComponent } from './vendita-post/vendita-post.component';
import { AffittiPostComponent } from './affitti-post/affitti-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'vendita', component: VenditaComponent},
  { path: 'affitto', component: AffittiComponent},
  { path: 'anzio', component: AnzioComponent},
  { path: 'contatti', component: ContattiComponent},
  { path: 'venditaPost/:id', component: VenditaPostComponent},
  { path: 'affittiPost/:id', component: AffittiPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
