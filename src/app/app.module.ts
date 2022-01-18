import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layouts/app/app.component';
import { BaseComponent } from './layouts/base/base.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { Intercept } from './shared/http/intercept';
import { IconsProviderModule } from './shared/icons/icons-provider.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, BaseComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Intercept,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
