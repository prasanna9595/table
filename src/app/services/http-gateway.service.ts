import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGatewayService {

  constructor(private http: HttpClient) {

  }

  getTocData(): Observable<any> {
    return this.http.get('http://10.96.153.168:8086/toc/read');
  }

}
