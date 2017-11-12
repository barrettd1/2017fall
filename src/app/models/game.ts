
export class Quote{
    text: string
}

export class Player{
    name: string = "Moshe Plotkin";
    quotes: Quote[] = [];
    score: number = 0;
}

export class Room{
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string;
    quotes: Quote[] = [];
}