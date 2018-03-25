import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule,MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,MatCheckboxModule,
    // .forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
