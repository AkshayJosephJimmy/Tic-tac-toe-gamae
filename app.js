const cellElements=document.querySelectorAll(`.cell`);
let circleTurn=false;

for(const cellElement of cellElements){
    cellElement.addEventListener(`click`,handleClick,{once:true});
}

function handleClick(e){
    
    let currTurn= circleTurn?`circle`:`x`
    const targetcell=e.target;
    targetcell.classList.add(currTurn);
    circleTurn=!circleTurn;
}