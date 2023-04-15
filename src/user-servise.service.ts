import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiseService {
  url = "https://jsonplaceholder.typicode.com/todos/1"
  constructor(public Http:HttpClient){}
  users() 
  { 
      return this.Http.get(this.url);
  }
}
