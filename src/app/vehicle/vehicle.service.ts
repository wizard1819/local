import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable ,catchError,map,of,retry,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService<T=any> {
  constructor(private http : HttpClient) { }
  getAll(pageIndex : number,pageSize : number): Observable<T>{   
    return this.http.get<T>("/vehicle?page="+ pageIndex + "&size=" + pageSize).pipe(
      // map((res: any) => {
      //   if (!res.response) {
      //     console.log('Error occurred.');
      //     throw new Error('Value expected!');
      //   }
      //   return res.response;
      // }),
      // // retry(3), // Retry up to 3 times before failing
     
    );
  }
     

  delete(id: number):Observable<T>{
    return this.http.delete<T>("/vehicle/"+id);
  }

  add(data :any):Observable<T>{
    return this.http.post<T>("/vehicle",data);
  }

  update(dataId : number, dataToUpdate: any): Observable<T> {
    return this.http.put<T>("/vehicle/"+dataId,dataToUpdate);
  }

  get():Observable<T>{
   return this.http.get<T>("http://localhost:2020/api/vehicle/student");
  }


  getAlllValues(){
    
  }
}
