import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunicationService } from 'src/app/service/communication.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-add-communication',
  templateUrl: './add-communication.component.html',
  styleUrls: ['./add-communication.component.scss']
})
export class AddCommunicationComponent implements OnInit {
  @Input() value!: string;
  constructor(private communicationService: CommunicationService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public post(): void {
    const model = new Post();
    model.value = this.value;
    this.save(model);
  }

  save(model: Post): any {
    this.communicationService.setPost(model);
    this.dialog.closeAll();
    this.communicationService.refreshList();
  }
}
