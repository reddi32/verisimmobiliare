import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenditaComponent } from './vendita/vendita.component';
import { AffittiComponent } from './affitti/affitti.component';
import { HomeComponent } from './home/home.component';
import { AnzioComponent } from './anzio/anzio.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VenditaPostComponent } from './vendita-post/vendita-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { AffittiPostComponent } from './affitti-post/affitti-post.component';


@NgModule({
  declarations: [
    AppComponent,
    VenditaComponent,
    AffittiComponent,
    HomeComponent,
    AnzioComponent,
    ContattiComponent,
    ChisiamoComponent,
    ComingSoonComponent,
    VenditaPostComponent,
    AffittiPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
