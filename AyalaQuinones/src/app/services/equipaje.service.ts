import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipaje } from '../models/Equipaje';

import{HttpClient}from '@angular/common/http'
const base_url=environment.base;
@Injectable({
  providedIn: 'root'
})
export class EquipajeService {

  url=`${base_url}/equipajes`;
  listaCambio=new Subject<Equipaje[]>();
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Equipaje[]>(this.url);
  }

  insert(eq:Equipaje){
    return this.http.post(this.url,eq);
  }

  setList(listaNueva:Equipaje[]){
    return this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
