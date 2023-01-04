import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';

//material angular
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'

//componenty
import { AppComponent } from './app.component';
import { ListComponent } from './list/list-blog.component';
import { DetailComponent } from './detail/detail-blog.component';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,

  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
]

const COMPONENTS = [
  AppComponent,
  ListComponent,
  DetailComponent
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MODULES
  ],
  providers: [],
  bootstrap: [COMPONENTS]
})

export class AppModule { }
