import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Es el modulo principalmente de la aplicacion
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Se inyectan otros modulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
