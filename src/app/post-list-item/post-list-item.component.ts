import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post.ts';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postItem: Post;

  constructor() {
  }

  ngOnInit() {
  }

  onLove() {
    this.postItem.loveIts++ ;
  }
  onDontLove() {
    this.postItem.loveIts-- ;
  }

}
