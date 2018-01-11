import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styles: [`
    .fiveLogs {
      color: white;
    }
  `]
})
export class ThirdAssignmentComponent implements OnInit {

  visible: boolean = true;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  displayDetails(event: Event) {
    this.visible = !this.visible;
    this.logs.push(this.logs.length + 1);
  }

  onVisible() {
    return this.visible ? 'hidden' : 'visible';
  }

}
