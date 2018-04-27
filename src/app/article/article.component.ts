import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../shared/article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() article: Article;
  constructor() {

  }

  ngOnInit() {
  }
voteUp(): boolean {
  this.article.voteUp();
  return false; // this to stop page reloading

}

voteDown(): boolean {
  this.article.voteDown();
  return false; // this to stop page reloading
}
}
