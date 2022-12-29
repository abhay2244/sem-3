import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ArraycrudComponent } from './arraycrud/arraycrud.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:"arraycrud",component:ArraycrudComponent},
  {path:'faculties',component:FacultiesComponent},
  {path:'faculty/add',component:AddFacultyComponent},
  {path:'faculty/:id',component:DetailFacultyComponent},
  {path:'faculty/edit/:id',component:AddFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
