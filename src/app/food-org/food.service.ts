import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }

  food(pageIndex : number,pageSize : number):Observable<any>{
    return this.http.get<any>("http://54.70.61.186:8081/api/foodservice/orgtable?page="+pageIndex+"&size="+pageSize);
  }
  fooddelete(id : number):Observable<any>{
    return this.http.delete<any>("http://54.70.61.186:8081/api/foodservice/orgtable/"+id);
  }
  foodupdate(dataId : number, dataToUpdate: any):Observable<any>{
    return this.http.put<any>("http://54.70.61.186:8081/api/foodservice/orgtable/"+dataId,dataToUpdate);
  }
  foodadd(data :any):Observable<any>{
    return this.http.post<any>("http://54.70.61.186:8081/api/foodservice/orgtable",data);
  }
}
