import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url="http://localhost:2020/api/vehicle/vehicle";
  constructor(private http : HttpClient) { }
  getAll(pageIndex : number,pageSize : number){   
    return this.http.get<any>(this.url+"?page="+ pageIndex + "&size=" + pageSize);
  }

  delete(id: number){
    return this.http.delete<any>(this.url+"/"+id);
  }

  add(data :any):Observable<any>{
    return this.http.post<any>(this.url,data);
  }

  update(dataId : number, dataToUpdate: any): Observable<string> {
    return this.http.put<string>(this.url+"/"+dataId,dataToUpdate);
  }

  get():Observable<any>{
   return this.http.get<any>("http://localhost:2020/api/vehicle/student");
  }


  
}
