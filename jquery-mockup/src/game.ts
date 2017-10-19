import * as $ from 'jquery';

export class Quote{
    text: string
}

export class Player{
    name: string = "Moshe Plotkin";
    quotes: Quote[] = [];
    score: number = 0;

    drawQuotes(){
        $("#my-quotes").html(
            this.quotes.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }
}

export class Room{
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string = "https://media4.s-nbcnews.com/j/newscms/2017_07/1903576/170215-chicken-farm-mn-1630_c65475166849611a3c0207983317eab4.nbcnews-ux-320-320.jpg";
    quotes: Quote[] = [];

    drawPicture(){
        $("#picture").attr("src", this.picture);
    }

    drawQuotes(){
        $("#played-quotes").html(
            this.quotes.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }

    drawPlayers(){
        $("#players").html(
            this.players.map(x => `<li class="list-group-item">${x.name}</li>`).join("")
        )
    }
}

export class Game{
    players: Player[] = [];
    pictures: string[] = [
        "https://media4.s-nbcnews.com/j/newscms/2017_07/1903576/170215-chicken-farm-mn-1630_c65475166849611a3c0207983317eab4.nbcnews-ux-320-320.jpg",
        "https://media4.s-nbcnews.com/j/newscms/2017_03/1870136/gettyimages-458409394_71637639157329f7cb319a3e895e2860.nbcnews-ux-320-320.jpg"
    ];
    quotes: Quote[] = [
        { text: "Get me out of here"},
        { text: "They're just fine"},
        
    ];
}

//Controller

const game = new Game();
const room = new Room();
const me = new Player();

let i = 0;
room.picture = game.pictures[i];
room.drawPicture();
room.drawQuotes();
room.drawPlayers();

me.quotes = game.quotes;
me.drawQuotes();

$("#cmd-flip").click(function(e){
    e.preventDefault();
    i++;
    room.picture = game.pictures[i];
    room.drawPicture();
})