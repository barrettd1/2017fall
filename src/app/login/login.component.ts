import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';
import { Player } from '../models/game';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private game: GameService) { }

  ngOnInit() {
  }

  login(){
    this.game.me = new Player();
  }
}
