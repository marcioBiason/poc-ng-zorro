import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedRxService {
  private subject = new Subject<any>();
  constructor() {}

  sendList(data?: any) {
    this.subject.next(data);
  }

  getList(): Observable<any> {
    return this.subject.asObservable();
  }
}
