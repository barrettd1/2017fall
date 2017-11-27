import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';
import { Player } from '../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name:string;
  password:string;

  constructor(private game: GameService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.game.login(this.name, this.password);
  }
}
