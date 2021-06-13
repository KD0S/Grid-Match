var colors = ["red","blue","orange","green","purple","cyan"];
var grid = document.querySelector('.grid-container');
var i,j,k;
var gridi,gridj;
var blanki,blankj;
let temp;
let blankPosition;
let timer = document.querySelector('.timer');
let moves = document.querySelector('.moves');
let resetButton = document.querySelector('.reset');
let grids = document.querySelectorAll('.grid-item');
var obj = document.querySelectorAll('.obj-item');
let winarray = []
let count = 0
let move = 0
let time = 0


let gridid = [["1","2","3","4","5"],
["6","7","8","9","10"],
["11","12","13","14","15"],
["16","17","18","19","20"],
["21","22","23","24","25"]
]

let winid = ["7","8","9","12","13","14","17","18","19"]


function swap(a,b){
    temp=a
    a=b
    b=temp
}



function blankpos(){
 for(k=0;k<grids.length;k++){
    if(grids[k].style.backgroundColor=="black"){
      blankPosition=grids[k]
      for(i=0;i<5;i++){
         for(j=0;j<5;j++){
             if(grids[k].id==gridid[i][j]){
                blanki = i;
                blankj = j;
            }
          }
        }
      }
    }
}
function blankgrid() {
    blankPosition = grids[Math.floor(Math.random()*grids.length)]
    blankPosition.style.backgroundColor = "black"
    blankpos()
}
function randomsquare(){
 for (i = 0; i < grids.length; i++) {
    var colour = colors[Math.floor(Math.random()*colors.length)]
    if(i<obj.length){
        obj[i].style.backgroundColor= colour
    }
     if(grids[i]!==blankPosition){
        grids[i].style.backgroundColor = colour
        
    }
  }
}

blankgrid()
randomsquare()


var myVar;

function myFunction() {
  myVar = setInterval(timerfun, 1000);
}
myFunction()

function timerfun() {
  time++;
  timer.innerHTML = time
}




for(i=0;i<grids.length;i++){
    grids[i].addEventListener("click",gridswap)
}



function gridswap(){
    gridpos(this.id)
    if(Math.abs(gridi-blanki)==1&&Math.abs(gridj-blankj)==0){
      blankPosition.style.backgroundColor = this.style.backgroundColor
      this.style.backgroundColor="black"
      blankpos()
      move++
      moves.innerHTML=move
    }
    else if(Math.abs(gridi-blanki)==0&&Math.abs(gridj-blankj)==1){
        blankPosition.style.backgroundColor = this.style.backgroundColor
        this.style.backgroundColor="black"
        blankpos()
        move++
        moves.innerHTML=move
    }
    win()
    
}     
        
function gridpos(x){
     for(i=0;i<5;i++){
         for(j=0;j<5;j++){
             if(x==gridid[i][j]){
                gridi = i;
                gridj = j;
             }
         }
     } 
}



function win(){
    count=0
    for(i=0;i<winid.length;i++){
        for(j=0;j<grids.length;j++){
              if(winid[i]==grids[j].id){
                  winarray[i]=grids[j]
              }
                
         } 
     }
     for(i=0;i<obj.length;i++){
         if(obj[i].style.backgroundColor==winarray[i].style.backgroundColor){
             count+=1
             if(count==9){
                 count = 0
                 alert("Congratulation! You've Won!")
                 reset()
             }
         }
         else{
             count = 0
         }
      }
      
 }

resetButton.addEventListener("click", function(){
	reset();
    console.log("reset")
})

 function reset(){
	blankgrid()
    randomsquare()
    moves.innerHTML=0
    timer.innerHTML=0
    move = 0
    count = 0
    time = 0
   
}
