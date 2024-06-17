import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';



@Injectable({
  providedIn: 'root'
})
export class Project2Service {

  private apiUrl = 'http://localhost:9000/Project';

  constructor(private http: HttpClient) { }
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/getAll');
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl+'/addProject', project, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteProject(id:any): Observable<any[]> {
    return this.http.delete<any>(this.apiUrl+'/delete/' + id);

  }

   getById(id:any): Observable<any> {
    return this.http. get<any>(this.apiUrl+'/getById/' + id);
  }



   update(  id : any ,project:  any): Observable< any> {
    return this.http.put<Project>(this.apiUrl+'/updateProject/' + id, project, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


}
