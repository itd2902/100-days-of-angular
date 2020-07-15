import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as model from '../models/author.model';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: model.Author;
  //gửi yêu cầu lên author list để xóa bản ghi
  @Output() deteleAuthor = new EventEmitter<model.Author>();
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete(author: model.Author) {
    this.deteleAuthor.emit(author);
  };

}
