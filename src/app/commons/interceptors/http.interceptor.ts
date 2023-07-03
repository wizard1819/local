import { Injectable } from "@angular/core";
import { HttpEvent,HttpHandler,HttpRequest,HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()

export class Httpinterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq=req.clone({url:"http://localhost:2020/api/vehicle"+req.url})
        console.log('interceptor',newReq);
        return next.handle(newReq);
    }
}