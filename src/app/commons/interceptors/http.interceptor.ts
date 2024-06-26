import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { SnackbarService } from "src/app/snackbar/snackbar.service";
import { LoginService } from "src/app/login/login.service";
@Injectable()

export class Httpinterceptor implements HttpInterceptor {

  constructor(
    private snack: SnackbarService,
    private login: LoginService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({ url: "http://localhost:8080/api/local" + req.url, headers: req.headers.set('authentication', 'token')})
    return next.handle(newReq).pipe(
      // tap(
      //   result => {
      //   console.log(result, 'res');
      // },
      //   error => {
      //     this.snack.show(error.name);
      //   }
      // ),

      catchError((error) => {
        this.snack.show(error.name);
        return throwError(error);
      })
    
    );
  }
}

