import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterSwordComponent } from './master-sword/master-sword.component';

@NgModule({
  declarations: [// let know angular your modules
    AppComponent, MasterSwordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]       // bootstrap comes with angular
})
export class AppModule { }
