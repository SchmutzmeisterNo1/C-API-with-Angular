import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/service/user-api.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public userService: UserApiService) { }

  ngOnInit(): void {
  }

  onDelete(id: number): void{
    this.userService.deleteUserDetail(id)
      .subscribe(this.userService.refreshList());
  }
}
