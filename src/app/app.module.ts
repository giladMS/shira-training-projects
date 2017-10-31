import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from "./app.routing";
import { LibModule } from './lib/lib.module';
import { FormBuilderComponent } from './form-builder/form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
