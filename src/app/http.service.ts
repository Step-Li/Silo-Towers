import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Indicator} from './indicator';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }

    private indUrl ="api/indicators"
      
    getData(){
        return this.http.get<any>(this.indUrl);
    }
}