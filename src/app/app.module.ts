import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    MatIconModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
