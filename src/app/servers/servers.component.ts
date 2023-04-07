import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No servers Created";
  serverName = 'Test Server';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerCreationStatus(): void {

    this.serverCreationStatus = "server created successfully and name is " + this.serverName;
  }

  onUpdateServerName(event:any){
    
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }

}