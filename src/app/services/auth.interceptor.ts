import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    // constructor(@SkipSelf private http:htc){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newreq=req;
        let token=localStorage.getItem('token')
        console.log(' interceptor',`Bearer ${token}`)
        if(token!=null){
            newreq=newreq.clone({setHeaders:{"Authorization":`Bearer ${token}`}})
            newreq=newreq.clone({setHeaders:{'Access-Control-Allow-Origin':'http://localhost:4200'}})
            newreq=newreq.clone({setHeaders:{'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE'}})
            newreq=newreq.clone({setHeaders:{'Access-Control-Allow-Headers': 'Content-Type, Authorization'}})
            // newreq=newreq.clone({setHeaders:{"Access-Control-Request-Headers":"Content-Type"}})
            // newreq=newreq.clone({setHeaders:{"Content-Type":"application/json"}})
    
        }
        console.log(newreq)
        return next.handle(newreq)
    }
    
}