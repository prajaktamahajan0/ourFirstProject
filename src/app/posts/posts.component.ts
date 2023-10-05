import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/posts';
import { posts } from '../consts/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postsArray: Array<Ipost> = [];
  constructor() { }

  ngOnInit(): void {
    console.log(`Comp Init`);
    this.postsArray = posts;
  } 
}
