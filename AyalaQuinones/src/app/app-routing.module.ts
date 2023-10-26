import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyalaComponent } from './components/ayala/ayala.component';
import { AyalaCrearComponent } from './components/ayala/ayala-crear/ayala-crear.component';

const routes: Routes = [{
  path:'ayala',component:AyalaComponent,children:[
    {
      path:'nuevo',component:AyalaCrearComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
