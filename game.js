// Creating variables
var myX = 0, myY = 0,updates=0, posoka, duljinaNaOpashka=300;
var naKoiUpdateMinahPrez=[], fruitX, fruitY, gameStart = false, gameOver = false, points = 0;
for(let i = 0; i < 600; i = i +1){
    naKoiUpdateMinahPrez[i] = [];
    for(let j = 0; j < 800; j = j+1){
       naKoiUpdateMinahPrez[i][j] = -1;
    }  
}
fruitX = randomInteger(780);
fruitY = randomInteger(580);
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    if(gameStart){
        if(posoka == 39){
        myX = myX+2;
        }
        if(posoka == 40){
            myY = myY + 2;
        }
        if(posoka == 37){
            myX = myX - 2;
        }
        if(posoka == 38){
            myY = myY - 2;
        }
    
    
        if(areColliding(myX,myY,10,10,fruitX,fruitY,20,20)){
            fruitX = randomInteger(780);
            fruitY = randomInteger(580);
            duljinaNaOpashka = duljinaNaOpashka + 50;
            points ++;
        }
        if(myX >= 0 && myX < 800 && myY >=0 && myY < 600 && naKoiUpdateMinahPrez[myY][myX]!=-1
        && naKoiUpdateMinahPrez[myY][myX]>updates-duljinaNaOpashka
        && gameStart){
            console.log("qdesh se, spri!!!!");
            gameStart=false;
            gameOver = true;
            alert("gameOver");
        }
        if(myX >= 0 && myX < 800 && myY >=0 && myY < 600){
            naKoiUpdateMinahPrez[myY][myX]=updates;
            updates = updates + 1;
        }else{
            gameOver = true;
            alert("gameOver");
        }
    }
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    
    drawImage(bird,myX,myY,10,10);
    drawImage(cherry, fruitX, fruitY, 20,20);
    context.fillStyle = "blue";
    context.font = "30px Arial";
    context.fillText("Points: " + points,650,35);

    for(let tekushtRed=0; tekushtRed<600; tekushtRed=tekushtRed+1){
        for(let tekushtaKolona=0;tekushtaKolona<800;    
                                    tekushtaKolona=tekushtaKolona+1){
            if(naKoiUpdateMinahPrez[tekushtRed][tekushtaKolona]!=-1
            && naKoiUpdateMinahPrez[tekushtRed][tekushtaKolona]
               >updates-duljinaNaOpashka){
                context.fillStyle = "black";
                context.fillRect(tekushtaKolona,tekushtRed,1,1);
               }
        }
    }  
};
function keyup(key) {
    if(!gameOver){
        gameStart=true;
        posoka = key;
    }
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
