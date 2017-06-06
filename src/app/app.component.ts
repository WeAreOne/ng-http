import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/posts.service';
import { Post } from './shared/post.model';
import { GithubService } from "./shared/github.service";

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
  repos: Array<any>;

  constructor(private postsService: PostsService,
              private githubService: GithubService) { }

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

  getRepos(orgName: string) {
    this.githubService.listRepos(orgName)
      .subscribe(repos => this.repos = repos,
        error => this.errorMessage = <any>error);
  }
}
