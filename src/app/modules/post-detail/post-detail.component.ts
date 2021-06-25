import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from 'src/app/service/communication.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public id!: number;
  public post?: Post;
  constructor(private router: ActivatedRoute,
              private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    if (this.id != null) {
      this.GetById();
    }
  }

  GetById(): void {
    this.communicationService.getPostById(this.id)
      .subscribe(arg => this.post = arg);
  }

}
