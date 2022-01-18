import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { HomeRoutingModule } from './home.routing.module';
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [AlertComponent]
})
export class HomeModule {}
