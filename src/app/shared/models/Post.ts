export class Post {
  postId?: number;
  userId?: number;
  value!: string;
  creationDate?: Date;
  lastChangesDate?: Date;
  likes?: number;
  dislikes?: number;
  headLine!: string;
}
