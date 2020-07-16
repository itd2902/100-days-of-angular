import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  constructor() { }
  // checked = false;
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  ngOnInit(): void {
    console.log(1);
  }
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
