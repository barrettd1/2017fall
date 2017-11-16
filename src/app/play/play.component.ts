import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Room, Player, Quote } from '../models/game';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})

export class PlayComponent implements OnInit {

    apiRoot = "//localhost:3000"

    room = new Room();
    me = new Player();

     constructor(private http: Http) { }

    ngOnInit() {
        setInterval(() => this.update(), 1000)
        this.http.get(this.apiRoot+ "/game/quotes").subscribe( data => {
          this.me.quotes = data.json();
        })
    }

    update(){
        this.http.get(this.apiRoot + "/game/room/picture").subscribe( data => {
          this.room.picture = data.text();
        });
        this.http.get(this.apiRoot +  "/game/room/quotes").subscribe( data => {
            this.room.quotes = data.json();
        });
    }

    flipPicture(e: MouseEvent){
        e.preventDefault();
        this.http.post(this.apiRoot + "/game/room/picture", {}).subscribe();
        this.room.chosenQuote = null;
    }

    submitQuote(e: MouseEvent, quote: Quote, i: number){
        e.preventDefault();
        const data = { text: quote.text };
        this.http.post(this.apiRoot + "/game/room/quotes", data).subscribe(res => {
            this.me.quotes.splice(i, 1);
            this.me.quotes.push(res.json());
        });  
    }

    chooseQuote(e: MouseEvent, i: number){
        e.preventDefault();
        this.room.chosenQuote = i;
    }

}
