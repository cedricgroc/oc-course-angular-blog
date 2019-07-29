import { Component } from '@angular/core';
import { Post } from './post.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts =   [
    new Post("Titre post 1", "Contenu post 1", 0),
    new Post("Titre post 2", "Contenu post 2", -1),
    new Post("Titre post 3", "Contenu post 3", 1)
  ];

}
