import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainComponent } from '../main/main.component';
import { SellcarComponent } from '../sellcar/sellcar.component';

@NgModule({
  declarations: [MainComponent,
  SellcarComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ]
})
export class MainpageModule { }
