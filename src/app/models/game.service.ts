import { Injectable } from '@angular/core';
import { Player } from './game';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class GameService{
  
    apiRoot = "//localhost:3000"

    me: Player;

    constructor(private http: Http, private router: Router) { 
        //this.login("Barak Obama");
    }

    login(name: string, password: string){
        //we are making a post like in Postman, adding a player
        this.http.post(this.apiRoot + "/game/room/players", {name, password}).subscribe(
            //successful
            data => {
              this.me = data.json();
              this.http.get(this.apiRoot+ "/game/quotes").subscribe( data => {
                      this.me.quotes = data.json();
              });
              this.router.navigate(['/play']);
            },
            //unsuccessful
            err => {
              console.log(err);
            },
            () => {}
        )
        
    }
}
