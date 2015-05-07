

var map01 = [
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 0, 1, 1, 1, 1],
    [2, 2, 2, 0, 1, 1, 1, 1],
    [2, 2, 2, 0, 1, 1, 5, 4]
];


var map02 = [
    8, 5, 5, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1,
    8, 5, 5, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1,
    8, 5, 5, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1,
    8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1,
    8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1,
    8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1,
    8, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    8, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];


var placement02 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4, 0, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

var pawn1 = {

    type:"Pawn",
    name:"Pawn 1",
    move: 5,
    str: 5,
    rng: 1,
    hp: 10,
    team: 1,
    currentHp: 10,
    isDead: false,
    hasMoved:false,
    hasAttacked: false,
    resetTurn: function(){
        hasMoved = false;
        hasMoved = true;
    }
};
var pawn2 = {

    type:"Pawn",
    name:"Pawn 2",
    move: 5,
    str: 5,
    rng: 1,
    hp: 10,
    team: 1,
    currentHp: 10,
    isDead: false,
    hasMoved:false,
    hasAttacked: false,
    resetTurn: function(){
        hasMoved = false;
        hasMoved = true;
    }
};

var knight1 = {

    type:"Knight",
    name:"Knight 1",
    move: 7,
    str: 5,
    rng: 1,
    hp: 30,
    team: 1,
    currentHp: 30,
    isDead: false,
    hasMoved:false,
    hasAttacked: false,
    resetTurn: function(){
        hasMoved = false;
        hasMoved = true;
    }
};

var knight2 = {

    type:"Knight",
    name:"Knight 2",
    move: 7,
    str: 5,
    rng: 1,
    hp: 30,
    team: 1,
    currentHp: 30,
    isDead: false,
    hasMoved:false,
    hasAttacked: false,
    resetTurn: function(){
        hasMoved = false;
        hasMoved = true;
    }
};

var king = {

    type:"King",
    name:"King",
    move: 4,
    str: 8,
    rng: 3,
    hp: 20,
    team: 0,
    currentHp: 20,
    isDead: false,
    hasMoved:false,
    hasAttacked: false,
    resetTurn: function(){
        hasMoved = false;
        hasMoved = true;
    }
};

var rook = {

    type:"Rook",
    name:"Rook",
    move: 8,
    str: 12,
    rng: 1,
    hp: 50,
    team: 1,
    currentHp: 50,
    isDead: false,
    hasMoved:false,
    hasAttacked: false,
    resetTurn: function(){
        hasMoved = false;
        hasMoved = true;
    }
};
