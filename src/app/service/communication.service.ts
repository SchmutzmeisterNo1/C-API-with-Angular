import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Post } from '../shared/models/Post';
import { ParentComment } from '../shared/models/ParentComment';
import { ChildComment } from '../shared/models/ChildComment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) { }

  readonly baseURLPost = `http://localhost:5000/api/Post`;
  readonly baseURLParentComment = `http://localhost:5000/api/ParentComment`;
  readonly baseURLChildComment = `http://localhost:5000/api/ChildComment`;
  // * POST */
  getPostById(id: number): any {
    return this.http.get(this.baseURLPost + '/' + id);
  }

  getPost(): any {
    return this.http.get(this.baseURLPost);
  }

  setPost(post: Post): any {
    return this.http.post(this.baseURLPost, post);
  }

  updatePost(id: number, post: Post): any {
    return this.http.put(this.baseURLPost + '/' + id, post);
  }

  deletePost(id: number): any {
    return this.http.delete(this.baseURLPost + '' + id);
  }
  // * ParentComment */
  getParentCommentById(id: number): any {
    return this.http.get(this.baseURLParentComment + '/' + id);
  }

  getParentComment(): any {
    return this.http.get(this.baseURLParentComment);
  }

  setParentComment(parentComment: ParentComment): any {
    return this.http.post(this.baseURLParentComment, parentComment);
  }

  updateParenComment(id: number, parentComment: ParentComment): any {
    return this.http.put(this.baseURLParentComment + '/' + id, parentComment);
  }

  deleteParentComment(id: number): any {
    return this.http.delete(this.baseURLParentComment + '/' + id);
  }
  /* ChildComment */
  getChildCommentById(id: number): any {
    return this.http.get(this.baseURLChildComment + '/' + id);
  }

  getChildComment(): any {
    return this.http.get(this.baseURLChildComment);
  }

  setChildComment(childComment: ChildComment): any {
    return this.http.post(this.baseURLChildComment, childComment);
  }

  updateChildComment(id: number, childComment: ChildComment): any {
    return this.http.put(this.baseURLChildComment + '/' + id, childComment);
  }

  deleteChildComment(id: number): any {
    return this.http.delete(this.baseURLChildComment + '/' + id);
  }
}
