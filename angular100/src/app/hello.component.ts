import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: `<p>Your name : {{user.name}}</p>
            <p>Your age : {{user.age}}</p>
            <button (click)="showInfo()">Click me</button>
            <input type="text" [(ngModel)]="user.name"/>
            <p *ngIf="user.age>13;else noSee">
            You can see this movie</p>
            <ng-template #noSee>
            <p>
            You can not see this movie</p>
            </ng-template>
            `,
})
export class HelloComponent {
  user = {
    name: 'quang',
    age: 10
  };
  showInfo(): void {
    alert('hello');
  }
}
