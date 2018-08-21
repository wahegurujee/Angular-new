import {Injectable, isDevMode} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestClientService {
private baseUrl: string;

constructor(private http: HttpClient) {
    this.baseUrl = isDevMode() ? '' : '/api';
  }
  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url);
  }

  post(url: string, requestData?: any): Observable<any> {
    if (isDevMode()) {
      return this.http.get(this.baseUrl + url);
    } else {
      return this.http.post(this.baseUrl + url, requestData);
    }
  }

  put(url: string, requestData?: any): Observable<any> {
    if (isDevMode()) {
      return this.http.get(this.baseUrl + url);
    } else {
      return this.http.put(this.baseUrl + url, requestData);
    }
  }

  delete(url: string, requestData?: any): Observable<any> {
    if (isDevMode()) {
      return this.http.get(this.baseUrl + url);
    } else {
      return this.http.delete(this.baseUrl + url, requestData);
    }
  }

}
