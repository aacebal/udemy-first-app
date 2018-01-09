import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;

  constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}

  ngOnInit() {
  }

}
