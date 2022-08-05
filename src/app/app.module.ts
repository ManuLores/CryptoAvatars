import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarscardsComponent } from './avatarscards/avatarscards.component';
import { NavsComponent } from './navs/navs.component';
import { LoadComponent } from './load/load.component';
import { AssetscarsComponent } from './assetscars/assetscars.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarscardsComponent,
    NavsComponent,
    LoadComponent,
    AssetscarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
