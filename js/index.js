// Your code goes here

// mouseover
const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseover', function(event){
    busImg.style.filter = 'grayscale(100%)'
});

//  keydown

let passcode = []; //up up down down a b start 
document.addEventListener('keydown',function(e){
    passcode.push(e.key);
    if(passcode.length > 7){
        passcode.splice(0,1);        
    }
    if(passcode[0] === 'ArrowUp' && passcode[1] === 'ArrowUp' && passcode[2] === 'ArrowDown' && passcode[3] === 'ArrowDown' && passcode[4] === 'a' && passcode[5] === 'b' && passcode[6] === 'Enter' ){
        
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white';
    }
});


//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

