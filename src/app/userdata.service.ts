import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
userdataval=
{
name:'rupak',id:1,age:'24'
};
  constructor(private http:HttpClient) { }
  getdatauser()
  {
    let url='https://jsonplaceholder.typicode.com/todos';
    return this.http.get<any>(url);
  }

}
