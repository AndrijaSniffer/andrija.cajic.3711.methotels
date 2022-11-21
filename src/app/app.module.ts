import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {SobaArticleComponent} from './soba-article/soba-article.component';
import { PreporukeComponent } from './preporuke/preporuke.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { ONamaComponent } from './o-nama/o-nama.component';

@NgModule({
  declarations: [
    AppComponent,
    SobaArticleComponent,
    PreporukeComponent,
    NavBarComponent,
    PonudaComponent,
    ONamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
