import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http : HttpClient) { }
  getAll(pageIndex : number,pageSize : number){   
    return this.http.get<any>("/vehicle?page="+ pageIndex + "&size=" + pageSize);
  }

  delete(id: number){
    return this.http.delete<any>("/vehicle/"+id);
  }

  add(data :any):Observable<any>{
    return this.http.post<any>("/vehicle",data);
  }

  update(dataId : number, dataToUpdate: any): Observable<string> {
    return this.http.put<string>("/vehicle/"+dataId,dataToUpdate);
  }

  // get():Observ able<any>{
  //  return this.http.get<any>("http://localhost:2020/api/vehicle/student");
  // }


  
}
