import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminPageComponent
  },
  {
    path:'usermanagment/:id',
    component:UsermanagementComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
