import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Room, Player, Quote } from '../models/game';
import { GameService } from '../models/game.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})

export class PlayComponent implements OnInit {

    room = new Room();
    me: Player;

    constructor(private http: Http, public game: GameService, private router: Router) { }

    ngOnInit() {
        if(this.game.me == null){
            this.router.navigate(['/login']);
        }
        this.me = this.game.me;
        setInterval(() => this.update(), 1000)
    }

    update(){
        this.http.get(this.game.apiRoot +  "/game/room").subscribe( data => {
            this.room = data.json();
        });
    }

    flipPicture(e: MouseEvent){
        e.preventDefault();
        this.http.post(this.game.apiRoot + "/game/room/picture", {}).subscribe();
    }

    submitQuote(e: MouseEvent, quote: Quote, i: number){
        e.preventDefault();
        //says what player the qoute belongs to
        const data = { text: quote.text, player: this.me.name };
        this.http.post(this.game.apiRoot + "/game/room/quotes", data).subscribe(res => {
            this.me.quotes.splice(i, 1);
            this.me.quotes.push(res.json());
        });  
    }

    chooseQuote(e: MouseEvent, i: number){
        e.preventDefault();
        this.http.post(this.game.apiRoot + "/game/room/quotes/choose", { i: i }).subscribe(res=>{
         })
    }

    chosenQuote = ()=> this.room.quotes.find(x=> x.chosen);
    myQuote = ()=> this.room.quotes.find(x=> x.player ==this.me.name);

}
