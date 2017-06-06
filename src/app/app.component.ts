import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/posts.service';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  posts: Array<Post>;
  errorMessage: string;
  createdPost: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }

  createPost() {
    let post = new Post('My title', 'My body', 1);
    this.postsService.addPost(post)
      .subscribe(post => this.createdPost = post,
        error => this.errorMessage = <any>error);
  }

}
