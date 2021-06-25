import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './modules/communication/communication.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { TableComponent } from './modules/table/table.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path: 'post', loadChildren: () => import('src/app/modules/communication/communication.module')
    .then(x => x.CommunicationModule)
  },

  {
    path: 'post/:id', loadChildren: () => import('src/app/modules/post-detail/post-detail.module')
    .then(x => x.PostDetailModule)
  },

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
