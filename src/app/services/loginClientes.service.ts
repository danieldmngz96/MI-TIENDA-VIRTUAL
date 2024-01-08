import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginClientesService {

 api = apiUrl + "/tienda";

constructor(private http: HttpClient) { }

 /**
  * @author Daniel Dominguez
  * Servicio paa login de TIEDA VIRTUAL
  * @param {body} body json
  * @returns json
  */
  login(body: any): Observable<any> {
    return this.http.post(this.api + "/loginTiendaCliente", body);
  }
}
