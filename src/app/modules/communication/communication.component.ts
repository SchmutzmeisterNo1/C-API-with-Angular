import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/service/communication.service';
import { Post } from 'src/app/shared/models/Post';
import { AddCommunicationComponent } from './add-communication/add-communication.component';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  public gridColumns = 4;
  constructor(public communicationService: CommunicationService,
              private dialog: MatDialog,
              private router: Router) { }
  ngOnInit(): void {
    this.communicationService.refreshList();
  }

  openAddDialog(): any {
    this.dialog.open(AddCommunicationComponent);
  }

  getList(): any {
    return this.communicationService.getPost();
  }

  Routing(id: number): void {
    console.log(id);
    if (id !== null) {
      return this.router.navigate[('/news/' + id)];
    }
    else {

    }
  }

}
