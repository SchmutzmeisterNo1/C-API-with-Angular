import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './modules/home/home.component';
import { TableComponent } from './modules/table/table.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { OpenUserDialogComponent } from './shared/components/open-user-dialog/open-user-dialog.component';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { EditUserDialogComponent } from './shared/edit-user-dialog/edit-user-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import { ChatbotComponent } from './modules/chatbot/chatbot.component';
import { CommunicationComponent } from './modules/communication/communication.component';
import { AddCommunicationComponent } from './modules/communication/add-communication/add-communication.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FooterComponent,
    NavComponent,
    DeleteDialogComponent,
    OpenUserDialogComponent,
    EditUserDialogComponent,
    ChatbotComponent,
    CommunicationComponent,
    AddCommunicationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
