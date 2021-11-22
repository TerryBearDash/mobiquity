import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected API = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  list(url: string): Promise<any> {
    return this.http.get(`${this.API}${url}`).toPromise();
  }


}
