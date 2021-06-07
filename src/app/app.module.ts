import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CustomCheckboxModule} from './shared/components/custom-checkbox/custom-checkbox.module';
import {LoaderModule} from './shared/components/loader/loader.module';
import { AppRoutingModule } from './app-routing.module';
import {HeaderModule} from './header/header.module';
import { AppComponent } from './app.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomCheckboxModule,
        HeaderModule,
        LoaderModule
    ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
