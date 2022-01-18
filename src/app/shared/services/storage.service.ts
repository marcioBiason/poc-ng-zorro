import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private router: Router) {}

  getToken() {
    return !!localStorage.getItem('token');
  }

  logoff(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login').then(() => {});
  }
}
