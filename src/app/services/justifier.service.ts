import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JustifierService {

  albums: any [] = [];
  constructor( private http: HttpClient) {
  }


  getTextJustify(text: string, count: number) {
    return this.http.get(`https://justifier.herokuapp.com/getJustified/${text}/${count}`);
  }


}
