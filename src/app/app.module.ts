import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomCheckboxModule} from './shared/components/custom-checkbox/custom-checkbox.module';
import {MenuModule} from './menu/menu.module';
import { FooterComponent } from './footer/footer.component';
import {LoaderModule} from './shared/components/loader/loader.module';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomCheckboxModule,
        MenuModule,
        LoaderModule
    ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
