import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private apiUrl = 'http://localhost:9000/Equipe';
  constructor(private http: HttpClient) { }

  getEquipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/getAll');
  }

  createEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl+'/addEquipe', equipe, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteEquipe(id:any): Observable<any[]> {
    return this.http.delete<any>(this.apiUrl+'/delete/' + id);

  }

  getById(id:any): Observable<any> {
    return this.http. get<any>(this.apiUrl+'/getById/' + id);
  }

  update(  id : any ,equipe:  any): Observable< any> {
    return this.http.put<Equipe>(this.apiUrl+'/updateEquipe/' + id, equipe, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }






}



