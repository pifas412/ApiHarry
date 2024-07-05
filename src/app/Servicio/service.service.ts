import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlConsumir = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) { }
  
  lista(): Observable<any> {
    return this.http.get<any>(this.urlConsumir);
  }

}
