import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { retryWhen, scan, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Refresh } from './model/refresh';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private uri = `${environment.url}`;

  constructor(private http: HttpClient, private router: Router) {}

  private refreshToken(): void {
    const value: number = Number(localStorage.getItem('expired'));
    if (value && new Date(value) < new Date()) {
      this.refresh().subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('expired', String(new Date().setSeconds(data.expired)));
      });
    }
  }

  private refresh(): Observable<Refresh> {
    return this.http.get<Refresh>(`${environment.url}/refresh `).pipe(take(1));
  }

  private notAuthorization(status: number): void {
    if (status === 401) {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }
  }

  post<Data>(url: string, body: any): Observable<any> {
    this.refreshToken();
    return this.http.post(`${this.uri}${url}`, body).pipe(
      retryWhen(e =>
        e.pipe(
          scan((errorCount, error) => {
            this.notAuthorization(error.status);
            if (errorCount >= environment.retryAttempts || error.status < 500) throw error;
            return errorCount + 1;
          }, 0)
        )
      ),
      take(1)
    );
  }

  get<Data>(url: string, params?: any): Observable<any> {
    this.refreshToken();
    return this.http.get(`${this.uri}${url}`, { params }).pipe(
      retryWhen(e =>
        e.pipe(
          scan((errorCount, error) => {
            this.notAuthorization(error.status);
            if (errorCount >= environment.retryAttempts || error.status < 500) throw error;
            return errorCount + 1;
          }, 0)
        )
      ),
      take(1)
    );
  }

  put<Data>(url: string, body: any): Observable<any> {
    this.refreshToken();
    return this.http.put(`${this.uri}${url}`, body).pipe(
      retryWhen(e =>
        e.pipe(
          scan((errorCount, error) => {
            this.notAuthorization(error.status);
            if (errorCount >= environment.retryAttempts || error.status < 500) throw error;
            return errorCount + 1;
          }, 0)
        )
      ),
      take(1)
    );
  }

  delete<Data>(url: string): Observable<any> {
    this.refreshToken();
    return this.http.delete(`${this.uri}${url}`).pipe(
      retryWhen(e =>
        e.pipe(
          scan((errorCount, error) => {
            this.notAuthorization(error.status);
            if (errorCount >= environment.retryAttempts || error.status < 500) throw error;
            return errorCount + 1;
          }, 0)
        )
      ),
      take(1)
    );
  }
}
