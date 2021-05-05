var bg;
var cycle1, cycle2;
var txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9;
var startB, retryB, chooseB, pvpB, start2;
var gs="choose";
var end=0;
var bgm;
var won, lost;
var dot;
var yay, fail, horn;
var name;

function  preload(){
   track = loadImage("images/track.jpg");
   cyclist_1 = loadAnimation("images/mainPlayer1.png", "images/mainPlayer2.png");
   bgm = loadSound("hill climb racing.mp3");
   yay = loadSound("Yay.mp3");
   lost = loadSound("FAIL.mp3");
   horn = loadSound("HORNS.mp3") ;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  txt1 = createElement("h1")
  txt1.html("© SAISH ZADE")
  txt1.position(window.innerWidth/1.17, window.innerHeight/25)
  txt1.style("color", "black")
  txt1.style("fontSize", "30px")

  //player v/s computer
  chooseB = createButton()
  chooseB.html("Player V/S Computer");
  chooseB.position(window.innerWidth/2.3, window.innerHeight/3.5)
  chooseB.style("borderRadius", "80px")
  chooseB.style("width", "230px")
  chooseB.style("height", "80px")
  chooseB.style("backgroundColor", "gold")
  chooseB.style("color", "red")
  chooseB.style("fontSize", "20px")
  chooseB.mousePressed(mode);

  //multiplayer
  pvpB = createButton()
  pvpB.html("Multiplayer");
  pvpB.position(window.innerWidth/2.3, window.innerHeight/1.65)
  pvpB.style("borderRadius", "80px")
  pvpB.style("width", "230px")
  pvpB.style("height", "80px")
  pvpB.style("backgroundColor", "gold")
  pvpB.style("color", "red")
  pvpB.style("fontSize", "20px")
  pvpB.mousePressed(multiPlay);

  // start button
  startB = createButton()
  startB.html("START");
  startB.position(window.innerWidth/2.1, window.innerHeight/2.3)
  startB.style("borderRadius", "80px")
  startB.style("width", "110px")
  startB.style("height", "80px")
  startB.style("backgroundColor", "gold")
  startB.style("color", "red")
  startB.style("fontSize", "20px")
  startB.mousePressed(changeState);
  startB.hide();

  start2 = createButton()
  start2.html("START");
  start2.position(window.innerWidth/2.1, window.innerHeight/2.3)
  start2.style("borderRadius", "80px")
  start2.style("width", "110px")
  start2.style("height", "80px")
  start2.style("backgroundColor", "gold")
  start2.style("color", "red")
  start2.style("fontSize", "20px")
  start2.mousePressed(multiState);
  start2.hide();
 
  // player 1
  cycle1 = createSprite(window.innerWidth/13, window.innerHeight/2.9, 25, 25);
  cycle1.addAnimation("cyclist1", cyclist_1); 
  cycle1.scale = 0.1;
  // player 2
  cycle2 = createSprite(window.innerWidth/13, window.innerHeight/1.55, 25, 25);
  cycle2.addAnimation("cyclist2", cyclist_1); 
  cycle2.scale = 0.1;

  dot = createSprite(window.innerWidth/13, window.innerHeight/2, 1, 1);
}

function draw() {
  background("silver");
  
  if(gs === "choose"){
    image(track, 0, 0, window.innerWidth*5, window.innerHeight)

    //title
    txt1 = createElement("h1")
    txt1.html("CYCLE RACING GAME")
    txt1.position(window.innerWidth/2.8, window.innerHeight/1000)
    txt1.style("width", "500px")
    txt1.style("height", "60px")
    txt1.style("backgroundColor", "white")
    txt1.style("color", "purple")
    txt1.style("fontSize", "50px")
  }
  
  // player v/s computer
  if(gs === "start") {
    image(track, 0, 0, window.innerWidth*5, window.innerHeight)

    startB.show();

    // instruction
    txt2 = createElement("h2")
    txt2.html("How to Play-")
    txt2.position(window.innerWidth/6.26, window.innerHeight/1.1)
    txt2.style("width", "160px")
    txt2.style("height", "30px")
    txt2.style("backgroundColor", "white")
    txt2.style("color", "red")
    txt2.style("fontSize", "25px")

    // instruction 1
    txt3 = createElement("h3")
    txt3.html("(1) Press the 'RIGHT ARROW KEY' to move.")
    txt3.position(window.innerWidth/3.85, window.innerHeight/1.106)
    txt3.style("width", "510px")
    txt3.style("height", "30px")
    txt3.style("backgroundColor", "white")
    txt3.style("color", "teal")
    txt3.style("fontSize", "25px")

    // instruction 2
    txt4 = createElement("h3")
    txt4.html("(2) Reach before the opponent to win the race.")
    txt4.position(window.innerWidth/1.73, window.innerHeight/1.106)
    txt4.style("width", "500px")
    txt4.style("height", "30px")
    txt4.style("backgroundColor", "white")
    txt4.style("color", "teal")
    txt4.style("fontSize", "25px")

    //text behind the player
    textSize(20)
    fill("lime")
    text("PLAYER", cycle1.x-100, cycle1.y-30)

    textSize(16)
    fill("yellow")
    text("COMPUTER", cycle2.x-110, cycle2.y-30)
  }

  // player v/s computer
  if(gs === "play") {
    startB.hide();

    cycle1.visible = true;
    cycle2.visible = true;

    image(track, 0, 0, window.innerWidth*5, window.innerHeight) 

    //text behind the player
    textSize(20)
    fill("lime")
    text("PLAYER", cycle1.x-100, cycle1.y-30)

    textSize(16)
    fill("yellow")
    text("COMPUTER", cycle2.x-110, cycle2.y-30)
     
    // player 1 movement
    if(keyDown(RIGHT_ARROW)){
      cycle1.x = cycle1.x+13;
      camera.position.x = cycle1.position.x;
    } 

    // if player 1 or 2 wins
    if(cycle1.x > 7600 && end === 0) {

      bgm.stop()
      yay.play();
      alert("CONGRATULATIONS!!! You have WON the Race.")
      cycle2.velocityX = 0; 

    // retry button
    retryB = createButton()
    retryB.html("REPLAY");
    retryB.position(window.innerWidth/2.1, window.innerHeight/1.5)
    retryB.style("borderRadius", "80px")
    retryB.style("width", "110px")
    retryB.style("height", "80px")
    retryB.style("backgroundColor", "red")
    retryB.style("color", "gold")
    retryB.style("fontSize", "20px")
    retryB.mousePressed(retry);
    
    end = 1;
    } 

    else if(cycle2.x > 7600 && end === 0) {

      bgm.stop();
      lost.play();
      cycle2.velocityX = 0
      alert("Better Luck Next Time, You have LOST the Race.")
      
    // retry button
    retryB = createButton()
    retryB.html("RETRY");
    retryB.position(window.innerWidth/2.1, window.innerHeight/1.5)
    retryB.style("borderRadius", "80px")
    retryB.style("width", "110px")
    retryB.style("height", "80px")
    retryB.style("backgroundColor", "red")
    retryB.style("color", "gold")
    retryB.style("fontSize", "20px")
    retryB.mousePressed(retry); 
    
    end = 1;
    }  
  }

  // multiplayer
  if(gs == "mPlay"){
    image(track, 0, 0, window.innerWidth*5, window.innerHeight)
    start2.show()

    textSize(18)
    fill("lime")
    text("Player-1", cycle1.x-90, cycle1.y-30)

    textSize(18)
    fill("cyan")
    text("Player-2", cycle2.x-90, cycle2.y-30)

    txt7 = createElement("h2")
    txt7.html("How to Play-")
    txt7.position(window.innerWidth/9, window.innerHeight/1.1)
    txt7.style("width", "160px")
    txt7.style("height", "30px")
    txt7.style("backgroundColor", "black")
    txt7.style("color", "red")
    txt7.style("fontSize", "25px")

    txt8 = createElement("h3")
    txt8.html("(1) Player 1: Press the 'RIGHT ARROW KEY' to move.")
    txt8.position(window.innerWidth/4.85, window.innerHeight/1.106)
    txt8.style("width", "610px")
    txt8.style("height", "30px")
    txt8.style("backgroundColor", "black")
    txt8.style("color", "lime")
    txt8.style("fontSize", "25px")

    txt9 = createElement("h3")
    txt9.html("(2) Player 2: Press 'W' to move.")
    txt9.position(window.innerWidth/1.71, window.innerHeight/1.106)
    txt9.style("width", "350px")
    txt9.style("height", "30px")
    txt9.style("backgroundColor", "black")
    txt9.style("color", "cyan")
    txt9.style("fontSize", "25px")
  }
  
  // multiplayer
  if(gs === "2play") {
    startB.hide();

    cycle1.visible = true;
    cycle2.visible = true;

    image(track, 0, 0, window.innerWidth*5, window.innerHeight) 

    //text behind the player
    textSize(18)
    fill("lime")
    text("Player-1", cycle1.x-90, cycle1.y-30)

    textSize(18)
    fill("cyan")
    text("Player-2", cycle2.x-90, cycle2.y-30)
     
    // player 1 movement
    if(keyDown(RIGHT_ARROW)){
      cycle1.x = cycle1.x+12;
    }

    camera.position.x = dot.position.x;

    // player 2 movement
    if(keyDown("w")){
      cycle2.x = cycle2.x+12
    }

    // if player 1 wins
    if(cycle1.x > 7600 && end === 0) {

      alert("PLAYER-1 has WON the Race.")
      dot.velocityX = 0;
      bgm.stop();
      horn.play()

    // retry button
    retryB = createButton()
    retryB.html("RESTART");
    retryB.position(window.innerWidth/2.1, window.innerHeight/2.25)
    retryB.style("borderRadius", "80px")
    retryB.style("width", "110px")
    retryB.style("height", "80px")
    retryB.style("backgroundColor", "red")
    retryB.style("color", "gold")
    retryB.style("fontSize", "20px")
    retryB.mousePressed(retry);
    end = 1;
    } 

    // if player 2 wins
    else if(cycle2.x > 7600 && end === 0) {

      alert("PLAYER-2 has WON the Race.")
      dot.velocityX = 0;
      bgm.stop();
      horn.play()
      
    // retry button
    retryB = createButton()
    retryB.html("RESTART");
    retryB.position(window.innerWidth/2.1, window.innerHeight/2.25)
    retryB.style("borderRadius", "80px")
    retryB.style("width", "110px")
    retryB.style("height", "80px")
    retryB.style("backgroundColor", "red")
    retryB.style("color", "gold")
    retryB.style("fontSize", "20px")
    retryB.mousePressed(retry); 
    end = 1;
    }  

    if(dot.x > 7000){
      dot.velocityX = 0;
    }
  }

  drawSprites();
}

// player v/s computer
function mode() {
  gs = "start";
  chooseB.hide();
  pvpB.hide();
  bgm.loop()
}

// player v/s computer
function changeState() {
  gs = "play";
  cycle2.velocityX = cycle2.velocityX+12.5;
}

// multiplayer
function multiPlay() {
  gs = "mPlay"
  pvpB.hide();
  chooseB.hide();
  bgm.loop();
}

//multiplayer
function multiState() {
  gs = "2play"
  start2.hide()
  dot.velocityX = dot.velocityX+11.5;
}

// restarting the game
function retry() {
  window.location.reload();
}
