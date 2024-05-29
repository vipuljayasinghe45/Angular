import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { AddCategoryRequest } from '../Model/add-category-request-model';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private http: HttpClient) { }
  baseServerUrl = 'http://localhost:5104/api/Employee';

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(this.baseServerUrl+'/createEmployee', model);
  }


  selectAllEmployee(): Observable<AddCategoryRequest[]> {
    return this.http.get<AddCategoryRequest[]>(this.baseServerUrl);
  }

  getEmployeeID(id:string):Observable<AddCategoryRequest>{
    return this.http.get<AddCategoryRequest>(this.baseServerUrl+'/GetId/'+id);
  }

  updateEmployeeDetails(model: AddCategoryRequest): Observable<void> {
    return this.http.put<void>(this.baseServerUrl+'/UpdateEmployee', model);
  }
  deleteEmployee(id:string):Observable<AddCategoryRequest>{
return this.http.delete<AddCategoryRequest>(this.baseServerUrl+'/DeleteEmployee/'+id);
  }
  
  loginUser(logininfo: Array<string>) {
    console.log(logininfo[0]+ logininfo[1])
    
    return this.http.post(
      this.baseServerUrl + 'loginUser',
      {
        username: logininfo[0],
        password:  logininfo[1],
        isAdmin:"Admin"
      }

    );
  }

}
