import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApifacultyService } from '../apifaculty.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent {
  id=-1;
  btnName = "Add Student";
  constructor(private __api:ApifacultyService,private __router:Router,private __actRoute:ActivatedRoute){}
  myForm = new FormGroup({
    createdAt : new FormControl(''),
    facultiesName : new FormControl(''),
    facultiesImage : new FormControl(''),
    department : new FormControl(''),
    city : new FormControl(''),
    username : new FormControl(''),
    id : new FormControl('')
  });

  ngOnInit(){
    if(this.__actRoute.snapshot.params['id']!=null){
      this.btnName = "Edit Student";
      this.id = this.__actRoute.snapshot.params['id'];

      this.__api.getFacultyById(this.id).subscribe((res:any) => {
        this.myForm.controls.city.setValue(res.city);
        this.myForm.controls.createdAt.setValue(res.createdAt);
        this.myForm.controls.facultiesName.setValue(res.facultiesName);
        this.myForm.controls.facultiesImage.setValue(res.facultiesImage);
        this.myForm.controls.department.setValue(res.department);
        this.myForm.controls.username.setValue(res.username);
        this.myForm.controls.id.setValue(res.id);
      })
    }
  }

  insert(){
    if(this.id>0){
      this.__api.update(this.id,this.myForm.value).subscribe((res) => {
        this.__router.navigate(['/faculties']); 
        });
    }
    else{
      this.__api.insert(this.myForm.value).subscribe((res) => {
        this.__router.navigate(['/faculties']); 
      });   
    }
   
  }
}
