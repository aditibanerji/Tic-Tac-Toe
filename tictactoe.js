
let turnMusic= new Audio('Beep Small (1) wav.wav')
let winner= new Audio('sfx-victory6 wav.wav')
let wrongMove= new Audio('sfx-boing3.wav')
let draw= new Audio('losing-bell-game-show-sound.wav')
let turn= 'X'
let gameOver =false;
let isGameActive=true;
let isValidAction=true;
let moves=0;

// to change turn
const changeTurn=()=>{
    return turn ==='X'?'O':'X'
}

// to check winner
const checkWinner=()=>{
     let winningConditions = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [2,4,6],
         [0,4,8]
     ]
     let boxTexts = document.querySelectorAll('.boxtext');
     winningConditions.forEach(function(w){
        if(  (boxTexts[w[0]].innerText === boxTexts[w[1]].innerText) && (boxTexts[w[1]].innerText === boxTexts[w[2]].innerText) && (boxTexts[w[0]].innerText !=='')){

            document.getElementsByClassName('gameinfo')[0].innerText = 'Player '+boxTexts[w[0]].innerText + " Won the Match!!!";
            winner.play();
            gameOver = true;  
        }  
     })
}
 
// to check number of moves
const checkMoves=()=>{
    moves=moves+1
    console.log(moves)
}
// to put moves in box
let box = document.querySelectorAll('.box');
box.forEach(function(b){
    
    let boxText= b.querySelector('.boxtext');
    b.addEventListener('click',()=>{

       if(isValidAction==true)
    {
        if(boxText.innerText=== ""){
        

             if(!gameOver){

                boxText.innerText = turn;
                let newText=" ";
                document.querySelector('.starting').innerHTML=newText;
                turn = changeTurn();
                turnMusic.play();
                checkMoves();
                checkWinner();
                if(!gameOver) { 
                    
                  if(moves!==9){
                    document.getElementsByClassName('gameinfo')[0].innerText = "Turn for"+" "+turn;
                  }
                  else if(moves==9){
                    document.getElementsByClassName('gameinfo')[0].innerText = "Match draw!!  :("
                    draw.play(); 
                  }
            }
                }
             else
             {
                 wrongMove.play();
             }
        }
        else
        {
             isValidAction = false;
        }

     }
       else
       {
           wrongMove.play();
           isValidAction=true;   
     
       }
    })
});

// to reset game
let reset = document.querySelector('.btn');
reset.addEventListener('click',()=>{
  
    let boxText = document.querySelectorAll('.boxtext');
    boxText.forEach(function(b){
        b.innerText="";
    })
     let newText= "Game starts with :";
     document.querySelector('.starting').innerHTML=newText;
     turn='X';
     gameOver=false;
     moves=0;
    document.getElementsByClassName('gameinfo')[0].innerText = "Turn for"+" "+turn; 
})


