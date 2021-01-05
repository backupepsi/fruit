class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                    player.getScore1();
                    player.getScore2();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         // to display player name on the basket.
                          
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);
                         
                     }
                    
                     //text to display player score.
                     fill("white");
                     textSize(25);
                     text("Score: "+ps1, 300, 50);

                     fill("white");
                     textSize(25);
                     text("Score: "+ps2, 300, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         fruit1Group.add(fruits);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         fruit2Group.add(fruits);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         fruit3Group.add(fruits);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         fruit4Group.add(fruits);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         fruit5Group.add(fruits);
                         break;
                     }
                     //fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                    if (fruit1Group.isTouching(player1)){
                        fruit1Group.destroyEach();
                        ps1 = ps1+1;
                        player.updateS1(ps1);
                    }
                    if (fruit2Group.isTouching(player1)){
                        fruit2Group.destroyEach();
                        ps1 = ps1+1
                        player.updateS1(ps1);
                    }
                    if (fruit3Group.isTouching(player1)){
                        fruit3Group.destroyEach();
                        ps1 = ps1+1
                        player.updateS1(ps1);
                    }
                    if (fruit4Group.isTouching(player1)){
                        fruit4Group.destroyEach();
                        ps1 = ps1+1
                        player.updateS1(ps1);
                    }
                    if (fruit5Group.isTouching(player1)){
                        fruit5Group.destroyEach();
                        ps1 = ps1+1
                        player.updateS1(ps1);
                    }

                    if (fruit1Group.isTouching(player2)){
                        fruit1Group.destroyEach();
                        ps2 = ps2+1;
                        player.updateS2(ps2);
                    }
                    if (fruit2Group.isTouching(player2)){
                        fruit2Group.destroyEach();
                        ps2 = ps2+1
                        player.updateS2(ps2);
                    }
                    if (fruit3Group.isTouching(player2)){
                        fruit3Group.destroyEach();
                        ps2 = ps2+1
                        player.updateS2(ps2);
                    }
                    if (fruit4Group.isTouching(player2)){
                        fruit4Group.destroyEach();
                        ps2 = ps2+1
                        player.updateS2(ps2);
                    }
                    if (fruit5Group.isTouching(player2)){
                        fruit5Group.destroyEach();
                        ps2 = ps2+1
                        player.updateS2(ps2);
                    }
                    //all fruits on screen are being destroyed, not each individual fruit  
                     // add the condition to calculate the score. and use update ti update the values in the database.
                   
                    
    console.log(ps1);
                }
    }

    end(){
       console.log("Game Ended");
    }
}