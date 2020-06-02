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

//  wheel  scroll over 3rd boat image

    let destinationImg = document.querySelector('.content-destination img')
    
    let scale = 1;
    
    function zoom(event){
        scale += event.deltaY * .01;
        destinationImg.style.transform = `scale(${scale})`;
    }

    destinationImg.addEventListener('wheel', zoom);
    


//  drag / drop


//  load logs when page loaded

window.addEventListener('load', function(e){
    console.log('page finished loading', e.timeStamp);
    
})
window.addEventListener('DOMContentLoaded', function(e){
    console.log('Dom fully loaded and parsed', e.timeStamp);
    
})

//  focus  focus on form input

const inputsContactForm = document.querySelector('.contact-form');

inputsContactForm.addEventListener('focus', function(e){
    e.target.style.transform = 'scale(1.05)';
    e.target.style.border = '5px solid teal';
}, true)
inputsContactForm.addEventListener('blur', function(e){
    e.target.style.transform = 'scale(1)';
    e.target.style.border = '1px solid teal';
}, true)

//  resizev bus image at half of page width

function imageResize(){
    busImg.width = window.innerWidth * .5;
}

window.addEventListener('resize', imageResize);

//  scroll
function handleScroll(event){
    if(document.body.scrollTop > 350|| document.documentElement.scrollTop > 350){
        document.body.style.color = 'teal';
    }
    
}

window.addEventListener('scroll', handleScroll)
//  select   log selected text in input contact form

function highlightSelected(event){
    console.log(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd));
}

const firstParagraph = document.querySelector('form');
firstParagraph.addEventListener('select',highlightSelected);
  
  

//  dblclick  double click on buttons

const pageButtons = document.querySelectorAll('.btn');

pageButtons.forEach(button =>{
    button.addEventListener('dblclick', function(e){
        e.target.style.transform = 'rotate(90deg)';
        console.log('clicked');
        
    })
});

