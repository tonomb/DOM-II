// Your code goes here

// mouseover   => mouseover bus image
const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseover', function(event){
    busImg.style.filter = 'grayscale(100%)'
});

//  keydown  => type up up down down a b start 

let passcode = []; 
document.addEventListener('keydown',function(e){
    passcode.push(e.key);
    
    
    if(passcode.length > 7){
        passcode.splice(0,1);        
    }
    if(passcode[0] === 'ArrowUp' && passcode[1] === 'ArrowUp' && passcode[2] === 'ArrowDown' && passcode[3] === 'ArrowDown' && passcode[4] === 'a' && passcode[5] === 'b' && passcode[6] === 'Enter' ){
        alert('Dark Mode Unlocked');
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white';
    }
});

//  wheel  zoom on 3rd boat image

    let destinationImg = document.querySelector('.content-destination img')
    
    let scale = 1;
    
    function zoom(event){
        scale += event.deltaY * .01;
        destinationImg.style.transform = `scale(${scale})`;
    }

    destinationImg.addEventListener('wheel', zoom);
    


//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

