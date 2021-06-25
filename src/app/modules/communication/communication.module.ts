import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommunicationRoutingModule } from './communication-routing.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    CommunicationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CommunicationRoutingModule,
    MatButtonModule
  ]
})
export class CommunicationModule { }
