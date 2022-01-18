import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { ButtonModule } from '../../shared/components/button/button.module';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    NzAvatarModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule {}
