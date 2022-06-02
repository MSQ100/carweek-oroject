import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './allmodules/main/main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{path:'', component:HomeComponent},
{path:'home/:id', component:MainComponent},

{path:'mainpage', loadChildren:()=> import('./allmodules/mainpage/mainpage.module')
.then(module=>module.MainpageModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
