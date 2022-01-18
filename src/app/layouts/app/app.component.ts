import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

import { I18N_ENGLISH } from './i18n/en';
import { I18N_PtBR } from './i18n/ptBr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-boilerplate';

  constructor(public translate: TranslateService, private storageService: StorageService) {
    translate.setTranslation('pt', I18N_PtBR);
    translate.setTranslation('en', I18N_ENGLISH);
    translate.setDefaultLang('pt');
    this.storageService.initLanguage();
  }
}
