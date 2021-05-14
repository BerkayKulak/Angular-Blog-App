import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './pages/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, AdminNavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MainModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
