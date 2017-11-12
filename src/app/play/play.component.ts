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
    me = new Player();

     constructor() { }

    ngOnInit() {
        setInterval(() => this.update(), 1000)
        $.getJSON(this.apiRoot+ "/game/quotes").done( data => {
          this.me.quotes = data;
        })
    }

    update(){
       $.get(this.apiRoot + "/game/room/picture").done( data => {
          this.room.picture = data;
      });
      $.getJSON(this.apiRoot +  "/game/room/quotes").done( data => {
          this.room.quotes = data;
      });
    }

    flipPicture(e: MouseEvent){
        e.preventDefault();
        $.post(this.apiRoot + "/game/room/picture")
    }

    submitQuote(e: MouseEvent, quote: Quote, i: number){
        e.preventDefault();
        const data = { text: quote.text };
        $.post(this.apiRoot + "/game/room/quotes", data);
        this.me.quotes.splice(i, 1);
    }

}
