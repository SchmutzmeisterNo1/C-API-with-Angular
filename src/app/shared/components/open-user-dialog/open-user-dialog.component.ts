import { Component, Input, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/service/user-api.service';
import { UserDetail } from '../../models/UserDetails';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-open-user-dialog',
  templateUrl: './open-user-dialog.component.html',
  styleUrls: ['./open-user-dialog.component.scss']
})
export class OpenUserDialogComponent implements OnInit {
  @Input() firstName?: string;
  @Input() lastName?: string;
  @Input() email?: string;
  @Input() password?: string;
  constructor(public userService: UserApiService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public post(): void{
    const model = new UserDetail();
    model.firstName = this.firstName;
    model.lastName = this.lastName;
    model.email = this.email;
    model.password = this.password;
    this.save(model);
  }

  save(model: UserDetail): void{
    this.userService.postUserDetail(model).subscribe(
      arg => {
      this.userService.refreshList();
      this.dialog.closeAll();
    });

  }
}
