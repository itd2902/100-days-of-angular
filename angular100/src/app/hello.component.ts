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
            <div *ngFor="let author of authors;index as idx; count as total, first as first, last as last, even as even; odd as odd">
  STT : {{idx}}-Total : {{total}}-First : {{first}}-Last : {{last}}-Even : {{even}}-Odd:{{odd}}-{{author.id}} - {{author.firstName}} {{author.lastName}}
  <ng-template *ngIf="user.age > 10 then goHome">
    <div>Hello</div>
  </ng-template>
  <ng-template #goHome>
    <div>Hello 2</div>
  </ng-template>
</div>
<ng-template
  ngFor
  [ngForOf]="authors"
  let-author
  let-idx="index"
  let-total="count"
>
  <div>
    ({{idx}})/({{total}}): {{author.id}} - {{author.firstName}}
    {{author.lastName}}
  </div>
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
  authors = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    // more data
  ];
}
