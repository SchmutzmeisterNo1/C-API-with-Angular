import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UserApiService } from 'src/app/service/user-api.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { NumberValueAccessor } from '@angular/forms';
import { UserDetail } from 'src/app/shared/models/UserDetails';
import { EditDialogComponent } from 'src/app/shared/components/edit-dialog/edit-dialog.component';
import { OpenUserDialogComponent } from 'src/app/shared/components/open-user-dialog/open-user-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(public userService: UserApiService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.refreshList();
  }

  openDeleteDialog(id: number): void{
    const dialogRef = this.dialog.open(DeleteDialogComponent);
  }

  openEditDialog(mode: UserDetail): void {
    const dialogRef = this.dialog.open(EditDialogComponent);
  }

  openAddUserDetailDialog(model: UserDetail): void {
    this.dialog.open(OpenUserDialogComponent);
  }

  onDelete(id: number): any{
    if (confirm('Are your sure to delete?')){
      this.userService.deleteUserDetail(id)
        .subscribe(res => {
          this.userService.refreshList();
        });
    }
  }
}
