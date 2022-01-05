import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  obtenerDatos(): Observable<any>{
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData(){
    return this.obtenerDatos()
        .pipe(
          delay(1500),
          map( data => {
            const labels = Object.keys(data);
            const values: number[] = Object.values(data);
            return {labels, values}
          } )
        )
  }
}
