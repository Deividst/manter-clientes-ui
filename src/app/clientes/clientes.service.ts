import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { Emprestimo } from 'src/model/Emprestimo';

 
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private api = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  listar() : Observable<any>{
    return this.http.get(this.api+"/clientes");
  }

  save(cliente: Cliente): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')

    if(cliente.id == null){
      return this.http.post(this.api + "/clientes", JSON.stringify(cliente), {headers: headers});
    }

    return this.http.put(this.api + "/clientes/" + cliente.id, JSON.stringify(cliente), {headers: headers});
    
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(this.api + "/clientes/" + id); 
  }

  simulacao(emprestimo: Emprestimo) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    return this.http.post(this.api + "/clientes/simulacao", JSON.stringify(emprestimo), {headers: headers})
  }

}
