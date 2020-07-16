import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('toggleComp') toggleComp: ToggleComponent;
  // toggleInside() {
  //   this.toggleComp.toggle();
  // }
  title = 'angular100';
  checked = false
  //query 1 danh sách Element
  @ViewChildren(ToggleComponent) toggleList: QueryList<ToggleComponent>;
  ngAfterViewInit() {
    console.log(this.toggleList);
  }
}
