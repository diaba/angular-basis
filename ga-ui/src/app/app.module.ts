import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterSwordComponent } from './master-sword/master-sword.component';
import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';

@NgModule({
  declarations: [// let know angular your modules
    AppComponent, MasterSwordComponent, HylianShieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]       // bootstrap comes with angular
})
export class AppModule { }
