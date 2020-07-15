import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @ViewChild('toggleComp') toggleComp: ToggleComponent;
  constructor() { }
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  ngOnInit(): void {

  }
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
