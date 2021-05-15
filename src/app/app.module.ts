import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './pages/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin-pages/admin.module';
import { AdminHomeComponent } from './admin-pages/admin-home/admin-home.component';



@NgModule({
  declarations: [AppComponent, AdminHomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MainModule, BrowserAnimationsModule,AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
