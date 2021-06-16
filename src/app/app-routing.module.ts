import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './modules/communication/communication.component';
import { HomeComponent } from './modules/home/home.component';
import { TableComponent } from './modules/table/table.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: CommunicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
