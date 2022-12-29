import { Component } from '@angular/core';
import { ApifacultyService } from '../apifaculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent {
  data:Faculty[] = [];
  constructor(private __api:ApifacultyService){

  }

  ngOnInit(){
    this.__api.getAllFaculties().subscribe((res:any) => {
    this.data=res;
    });
  }

  delete(id:any){
    this.__api.delete(id).subscribe((res) => {
    this.ngOnInit();
    });
  }
}
