import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from '../shared/article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
article: Article;
  constructor() {

    this.article = new Article('Angular 4', 'http://angular.io', 10);
  }

  ngOnInit() {
  }
voteUp() {
  this.article.votes += 1;
  return false; // this to stop page reloading

}

voteDown() {

  this.article.votes -= 1;
  return false; // this to stop page reloading
}
}
