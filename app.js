const cellElements=document.querySelectorAll(`.cell`);
const winnigBlock=document.querySelector(`.winning-message`);
const winningText=document.querySelector(`.winning-message-text`);
const restartBtn=document.querySelector("#restart");
let circleTurn=false;

for(const cellElement of cellElements){
    cellElement.addEventListener(`click`,handleClick,{once:true});
}

function handleClick(e){
    //mark the cell
    var currTurn= circleTurn?`circle`:`x`
    const targetcell=e.target;
    targetcell.classList.add(currTurn);
    //change the symbol
    circleTurn=!circleTurn;
    const check=checkWin(currTurn);
    if(check==true){
        winningText.innerHTML=`Player ${currTurn} wins!`;
        winningText.parentElement.classList.add(`show`);


    }
    //check for draw
   if(checkDraw()==true){
    winningText.innerText=`Draw!`;
    winningText.parentElement.classList.add(`show`);
   }
}
function checkDraw(){
    return Array.from(cellElements).every(cell=>cell.classList.contains(`x`)|| cell.classList.contains(`circle`));


}
function checkWin(currTurn){
const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
return winCondition.some(combination=>
    combination.every(index=>cellElements[index].classList.contains(`${currTurn}`))
    
);


}
restartBtn.addEventListener(`click`,restartGame);
function restartGame(){
    window.location.reload();
}
