import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//material angular
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

//componenty
import { AppComponent } from './app.component';
import { ListComponent } from './list/list-blog.component';
import { DetailComponent } from './detail/detail-blog.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,

  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatChipsModule,
  MatTooltipModule
]

const COMPONENTS = [
  AppComponent,
  ListComponent,
  DetailComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
