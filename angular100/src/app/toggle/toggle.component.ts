import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }
  @Input() checked = false;
  @Output() checkedChange=new EventEmitter<boolean>();
  ngOnInit(): void {

  }
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
