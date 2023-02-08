import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { UserDetails } from "../models/user";

@Injectable()
export class registerService {

    constructor(private http: HttpClient){}

    // postUser(): Promise<UserDetails[]> {
    //     return firstValueFrom(
    //         this.http.post
    //     )
    // }

    

}
