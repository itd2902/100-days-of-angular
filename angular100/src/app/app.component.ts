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
// function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
//   return { ...o1, ...o2 };
// }

// merge({ foo: 'bar' }, { bar: 'foo' });
