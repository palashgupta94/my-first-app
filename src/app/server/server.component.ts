import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`

        .online{
         color: white   
        }
        .offline{
            color: cyan

        }
    `]
})
export class ServerComponent{

    serverID: number = 10;
    public status: string = 'offline';
   
    connstructor(){
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
        console.log(this.status);
    }

    getServerStatus(): String{
        return this.status
    }

    getColor(): string{
        return this.status === 'online' ?'green' : 'red';
    }

}