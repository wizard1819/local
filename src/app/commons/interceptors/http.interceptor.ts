import { Injectable } from "@angular/core";
import { HttpEvent,HttpHandler,HttpRequest,HttpInterceptor } from "@angular/common/http";
import { Observable , tap} from "rxjs";
@Injectable()

export class Httpinterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq=req.clone({url:"http://localhost:2020/api/vehicle"+req.url,headers:req.headers.set('token','token')})
        // console.log('interceptor',newReq);
        return next.handle(newReq).pipe(
            tap(result=>{
              console.log(result,'res');
            },
          
            error=>{
              console.log(error,'erreeeee');
            }
            )
          );;
    }
}

