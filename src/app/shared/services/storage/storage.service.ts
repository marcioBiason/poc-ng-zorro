import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private router: Router, private translateService: TranslateService) {}

  clearLocalStorage(): void {
    localStorage.clear();
  }

  logoff(): void {
    this.clearLocalStorage();
    this.router.navigateByUrl('/').then(() => {});
  }

  getLanguage(): string {
    return String(localStorage.getItem('language'));
  }

  initLanguage() {
    const language = this.getLanguage();
    if (language === 'en' || language === 'pt') {
      this.translateService.use(language);
      this.changeLanguage(language);
      return;
    }
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|pt/) ? browserLang : 'pt');
    this.changeLanguage(browserLang?.match(/en|pt/) ? browserLang : 'pt');
    return;
  }

  changeLanguage(language: string) {
    localStorage.setItem('language', String(language));
    this.translateService.use(language);
  }
}
