import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { UserApiService } from 'src/app/service/user-api.service';
import { UserDetail } from '../models/UserDetails';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserApiService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onUpdate(id: number, model: UserDetail): void {
    this.userService.updateUserDetail(id, model)
    .subscribe(arg => {
      this.userService.refreshList();
      this.dialog.closeAll();
    });
  }
}
