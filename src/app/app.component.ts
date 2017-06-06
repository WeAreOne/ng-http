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

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }

}
