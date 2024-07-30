import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "../../config/api";
import { getUserProfileFailure } from "./user.action";

@Injectable({
    providedIn:'root'
})

export class UserService{
    private apiUrl=BASE_API_URL+"/api";
    headers: any;

    constructor(private http:HttpClient,private store:Store){
        this.headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem("jwt")}`)
    }

    getUserProfile(){
        return this.http.get(`${this.apiUrl}/profile`,{headers:this.headers}).pipe
        (map((user:any)=>{
            console.log('user profile successfully',user)
            
            return this.getUserProfileSuccess({userProfile:user})
        }),
        catchError((error)=>{
            return of(
                getUserProfileFailure(
                    error.response && error.response.data.message?
                    error.response.data.message:error.message
                )
            )
        })
      ).subscribe((action)=>this.store.dispatch(action))
    
    }
    getUserProfileSuccess(arg0: { userProfile: any; }): any {
        throw new Error("Method not implemented.");
    }
}