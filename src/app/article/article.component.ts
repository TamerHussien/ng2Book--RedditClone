import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
votes: number;
title: string;
link: string;
  constructor() {
    this.title = 'Angular 4';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  ngOnInit() {
  }
voteUp() {
  this.votes += 1;
  return false; // this to stop page reloading

}

voteDown() {

  this.votes -= 1;
  return false; // this to stop page reloading
}
}