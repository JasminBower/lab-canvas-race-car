const splashScreen = document.querySelector('.game-intro');

let bg;
let y = 0;
let car;
let img;

function preload(){
   bg = loadImage('../images/road.png');
   img = loadImage('../images/car.png');
};


function setup() {
  const canvas = createCanvas(600, 850);
  canvas.parent('game-board')
  car = new Car(260, 680, 80, 120);
};


class Car {
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
   
  };

  draw(){
    image(img, this.x, this.y, this.width, this.height);
  };

  moveX(num){
   this.x += num;
  };

  moveY(num){
    this.y += num
  }
}

function draw() {
 background(bg);
 car.draw();
 if(keyIsDown(LEFT_ARROW)){
   car.moveX(-10)
 } else if(keyIsDown(RIGHT_ARROW)){
   car.moveX(10)
 };

 //ran out of time to do anything cooler 🥲
};
 

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    splashScreen.getElementsByClassName.display = 'none'
    
    
  }
};

