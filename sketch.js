let gunSelected1 = 0;
let gunSelected2 = 0;
let rocketAmmo1 = 10;
let rocketAmmo2 = 10;
let player1Health = 100;
let player2Health = 100;
let player1Dead = false;
let player2Dead = false;
let direction1 = "left";
let direction2 = "right";
let colors = ['red', 'orange']

function setup() {
  new Canvas(400, 400, 'pixelated');
  // Players
  players = new Group();
  player1 = new players.Sprite(390, 10, 15, 45);
  player1.addAni('neutral', 'assets/player1neutral.png')
  player1.addAni('happy', 'assets/player1happy.png')
  player1.addAni('hurt', 'assets/player1hurt.png')
  player1.addAni('dead', 'assets/player1dead.png')
  
  player2 = new players.Sprite(10, 10, 15, 45);
  player2.addAni('neutral', 'assets/player2neutral.png')
  player2.addAni('happy', 'assets/player2happy.png')
  player2.addAni('hurt', 'assets/player2hurt.png')
  player2.addAni('dead', 'assets/player2dead.png')
  // Guns
  guns = new Group();
  gun1 = new guns.Sprite();
  gun2 = new guns.Sprite();
  guns.addAni('pstl', 'assets/pstl.png')
  guns.addAni('shotgun', 'assets/shotgun.png')
  guns.addAni('rpg', 'assets/rpg.png')
  
  bullets = new Group();
  rockets = new Group();
  explosions = new Group(); 
  
  // Floor & Boundaries
  base = new Sprite(width / 2, height, width * 3, 10, "s");
  base.color = "green";
  boundary1 = new Sprite(-5, height / 2, 10, 400, 's')
  boundary2 = new Sprite(width + 5,  height/2, 10, 400, 's')
  boundary3 = new Sprite(width/2,  -10, 400, 10, 's')
}

function draw() {
  background(220);
  world.gravity.y = 10;

  Players();
  Gun();
}
