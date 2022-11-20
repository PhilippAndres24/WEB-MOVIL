import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }
  
 apiURL="http://192.168.1.97:3000"; //json falso con powershell
  constructor(private http: HttpClient) { }
 
 
 
  getUsers(): Observable<any>{
    return this.http.get<usuarios>('https://nancyB3a.github.io/PGY4121/datosTAV2022.json')
  }


  getUser(alumId): Observable<any>{
    return this.http.get(this.apiURL + '/alumnos/'+alumId).pipe(
      retry(3)
    );
  }

  getCarreras(): Observable<any>{
    return this.http.get(this.apiURL + '/carrera/').pipe(
      retry(3)
    );
  }

  getCarrera(id): Observable<any>{
    return this.http.get(this.apiURL +'/carrera/'+id).pipe(
      retry(3)
    );
  }

  createCarreras(newCarrera): Observable<any>{
    return this.http.post(this.apiURL + '/carrera/'+newCarrera,this.httpOptions).pipe(
      retry(3)
    );
  }

  updateCarrera(id, laCarrera): Observable<any>{
    return this.http.put(this.apiURL + '/carrera/'+ id, laCarrera,this.httpOptions).pipe(
      retry(3)
    );
  }

  deleteCarrera(id): Observable<any>{
    return this.http.delete(this.apiURL + '/carrera/'+id, this.httpOptions).pipe(
      retry(3)
    );
  } 


}
