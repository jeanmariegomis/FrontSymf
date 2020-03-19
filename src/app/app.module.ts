import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchatComponent } from './achat/achat.component';
import {Ng2TelInputModule} from 'ng2-tel-input';



@NgModule({
  declarations: [
    AppComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2TelInputModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
