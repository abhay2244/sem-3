import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifacultyService } from '../apifaculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent {
  id=0;
  data:Faculty = new Faculty();
  constructor(private __actRoute:ActivatedRoute,private __api:ApifacultyService,private __router:Router){

  }
  ngOnInit(){
    this.id = this.__actRoute.snapshot.params['id'];
    this.__api.getFacultyById(this.id).subscribe((res:any) => {
    this.data = res;
    })
  }

  delete(){
    this.__api.delete(this.id).subscribe((res) => {
    this.__router.navigate(['/faculties']);
    });
  }
}
