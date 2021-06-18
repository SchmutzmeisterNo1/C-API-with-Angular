import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UserApiService } from 'src/app/service/user-api.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { NumberValueAccessor } from '@angular/forms';
import { UserDetail } from 'src/app/shared/models/UserDetails';
import { OpenUserDialogComponent } from 'src/app/shared/components/open-user-dialog/open-user-dialog.component';
import { EditUserDialogComponent } from 'src/app/shared/edit-user-dialog/edit-user-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() filter!: string;
  modalRel?: UserDetail;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!: MatTableDataSource<UserDetail>;
  constructor(public userService: UserApiService,
              public dialog: MatDialog,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.userService.refreshList();
    console.log(this.authService.getUser());
  }

  openAddUserDetailDialog(): void {
    const dialogRef = this.dialog.open(OpenUserDialogComponent);
  }

  openEditUserDialog(model: UserDetail): void {
    const activaeModal = this.dialog.open(EditUserDialogComponent, {
      data: model
    });
  }

  onDelete(id: number): any{
    if (confirm('Are your sure to delete?')){
      this.userService.deleteUserDetail(id)
        .subscribe(res => {
          this.userService.refreshList();
        });
    }
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
