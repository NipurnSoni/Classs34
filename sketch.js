var hypnoticBall, database;
var position;
var form,playerCount;
var game;
var player,gameState=0;


function setup(){
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  
  
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
}