import { Component, OnInit } from '@angular/core';
import { Room, Player, Quote } from '../models/game';

import * as $ from 'jquery';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  apiRoot = "//localhost:3000"

  room = new Room();

  constructor() { }

  ngOnInit() {
    setInterval(() => this.update(), 1000)
  }

  update(){
    $.get(this.apiRoot + "/game/room/picture").done( data => {
        this.room.picture = data;
    });
    $.getJSON(this.apiRoot +  "/game/room/quotes").done( data => {
        this.room.quotes = data;
    });
  }

}
