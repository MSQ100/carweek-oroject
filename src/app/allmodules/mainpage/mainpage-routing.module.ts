import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { SellcarComponent } from '../sellcar/sellcar.component';

const routes: Routes = [{path:'main',component:MainComponent},
{path:'main/:id',component:SellcarComponent},
{path:'sellcar/:id', component:MainComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
