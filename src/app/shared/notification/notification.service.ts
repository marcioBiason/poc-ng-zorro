import { Injectable } from '@angular/core';
import { NgxNotificationMsgService } from 'ngx-notification-msg';

import { NgxNotificationDirection } from './model/direction-enum';
import { NgxNotificationStatusMsg } from './model/msg-enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private readonly ngxNotificationMsgService: NgxNotificationMsgService) {}

  showSuccess(mgs: string, title?: string) {
    return this.ngxNotificationMsgService.open({
      status: NgxNotificationStatusMsg.SUCCESS,
      direction: NgxNotificationDirection.TOP_RIGHT,
      header: title || 'Sucesso',
      messages: [mgs]
    });
  }

  showErro(mgs: string, title?: string) {
    return this.ngxNotificationMsgService.open({
      status: NgxNotificationStatusMsg.FAILURE,
      direction: NgxNotificationDirection.TOP_RIGHT,
      header: title || 'Erro',
      messages: [mgs]
    });
  }

  showInfo(mgs: string, title?: string) {
    return this.ngxNotificationMsgService.open({
      status: NgxNotificationStatusMsg.INFO,
      direction: NgxNotificationDirection.TOP_RIGHT,
      header: title || 'Informação',
      messages: [mgs]
    });
  }

  showErrorRequest(error: any, msg?: string) {
    if (error && Array.isArray(error.errors)) {
      for (const item of error.errors) {
        this.showErro(item.message);
      }
    } else {
      if (msg) {
        this.showErro(msg);
      } else {
        this.showErro('Tivemos um problema, tente novamente.');
      }
    }
  }
}
