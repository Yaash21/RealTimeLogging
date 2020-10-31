import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saveoApp';
  socket:any;
  list:any=[]

  ngOnInit() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('user', 'From Client-Angular');
    this.socket.on('readNumber', (data: any) => {
      this.list.push(data);
    });
  }


}
