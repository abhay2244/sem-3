import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifacultyService {
  apiurl = 'https://630da107109c16b9abe9b070.mockapi.io/data/faculties';
  constructor(private http:HttpClient) { }

  getAllFaculties(){
   return this.http.get(this.apiurl);
  }

  getFacultyById(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }

  delete(id:any){
    return this.http.delete(this.apiurl+'/'+id);
  }
  insert(form:any){
    return this.http.post(this.apiurl,form);
  }
  update(id:any,form:any){
    return this.http.put(this.apiurl+'/'+id,form);
  }
}
