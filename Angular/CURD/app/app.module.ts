import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArraycrudComponent } from './arraycrud/arraycrud.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraycrudComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FacultiesComponent,
    DetailFacultyComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
