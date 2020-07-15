import { Component, OnInit } from '@angular/core';
import data from './../assets/authors.json';
import { Author } from '../models/author.model';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor() { }
  authors: Author[] = data;
  ngOnInit(): void {
    console.log(data);
  }
  handleDelete(author: Author) {
    console.log(1);
    console.log(author);
    this.authors = this.authors.filter(item => item.id !== author.id);
  }

}
