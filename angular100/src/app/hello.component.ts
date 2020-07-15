import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: `<p>Your name : {{user.name}}</p>
            <p>Your age : {{user.age}}</p>
            <button (click)="showInfo()">Click me</button>
            <input type="text" [(ngModel)]="user.name"/>
            `,
})
export class HelloComponent {
  user = {
    name: 'quang',
    age: 21
  };
  showInfo(): void {
    alert('hello');
  }
}
