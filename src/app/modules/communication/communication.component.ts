import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunicationService } from 'src/app/service/communication.service';
import { AddCommunicationComponent } from './add-communication/add-communication.component';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  public gridColumns = 4;
  constructor(public communicationService: CommunicationService,
              private dialog: MatDialog) { }
  ngOnInit(): void {
    this.communicationService.refreshList();
  }

  openAddDialog(): any {
    this.dialog.open(AddCommunicationComponent);
  }

  getList(): any {
    return this.communicationService.getPost();
  }

}
