var colors = ["red","blue","orange","green","purple","cyan"];
var grid = document.querySelector('.grid-container');
var i,j,k;
var gridi,gridj;
var blanki,blankj;
let temp;
let blankPosition;
let timer = document.querySelector('.timer');
let moves = document.querySelector('.moves');
var resetbutton = document.querySelector('#reset');

let grids = document.querySelectorAll('.grid-item');
var obj = document.querySelectorAll('.obj-item');



let gridid = [["1","2","3","4","5"],
["6","7","8","9","10"],
["11","12","13","14","15"],
["16","17","18","19","20"],
["21","22","23","24","25"]
]


function swap(a,b){
    temp=a
    a=b
    b=temp
}

function blankpos(){
 for(k=0;k<grids.length;k++){
    if(grids[k].style.backgroundColor=="black"){
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
     if(grids[i]!==blankPosition){
        var colour = colors[Math.floor(Math.random()*colors.length)]
        grids[i].style.backgroundColor = colour
        if(i<obj.length){
            obj[i].style.backgroundColor= colour
        }
    }
  }
}

blankgrid()
randomsquare()

for(i=0;i<grids.length;i++){
    grids[i].addEventListener("click",gridswap)
}

function gridswap(){
    
    gridpos(this.id)
    if(Math.abs(gridi-blanki)==1&&Math.abs(gridj-blankj)==0){
      blankPosition.style.backgroundColor = this.style.backgroundColor
      this.style.backgroundColor="black"
      temp = gridid[gridi][gridj]
      gridid[gridi][gridj] = gridid[blanki][blankj]
      gridid[blanki][blankj] = temp
      blankpos()
      
    }
    
    else if(Math.abs(gridi-blanki)==0&&Math.abs(gridj-blankj)==1){
        blankPosition.style.backgroundColor = this.style.backgroundColor
        this.style.backgroundColor="black"
        temp = gridid[gridi][gridj]
        gridid[gridi][gridj] = gridid[blanki][blankj]
        gridid[blanki][blankj] = temp
        blankpos()
        }
    
    grids = document.querySelectorAll('.grid-item');
    
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


function reset(){
	blankgrid()
    randomsquare()
}

resetbutton.addEventListener("click", function(){
	reset();
})
