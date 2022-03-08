let display = document.querySelector('#calcval')
let buttons = Array.from(document.querySelectorAll('.button'))
let toggle = document.querySelector('.toggle')
let mainColor = document.getElementsByClassName("back")
let addButtons = document.getElementsByClassName("delReset")

buttons.map( button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);

                }
                catch{
                    display.innerText = "i can't handle this:(";
                }
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText
        }
    })
})

document.querySelector('.first').addEventListener('click', switchLeft)
document.querySelector('.second').addEventListener('click', switchCenter)
document.querySelector('.third').addEventListener('click', switchRight)



function switchLeft(){
    toggle.classList.add('horizMoveLeft')
    toggle.classList.remove('horizMoveCenter')
    toggle.classList.remove('horizMoveRight')
    for( let i = 0; i<buttons.length; i++){
        buttons[i].style.color = "hsl(221, 14%, 31%)";
        buttons[i].style.background = "hsl(30, 25%, 89%)";
        buttons[i].style.boxShadow= "0 2.5px hsl(28, 16%, 65%)"
    }
    for ( let i = 0; i<mainColor.length; i++){ 
        mainColor[i].style.background = "hsl(222, 26%, 31%)"
    }
    for( let i = 0; i<addButtons.length; i++){
        addButtons[i].style.color = "white";
        addButtons[i].style.background = "hsl(225, 21%, 49%)";
        addButtons[i].style.boxShadow= "0 2.5px hsl(224, 28%, 35%)"
    }
    toggle.style.background = "hsl(6, 63%, 50%)"
    document.querySelector('#toggleContainer').style.background = "hsl(223, 31%, 20%)"
    document.querySelector('.screen').style.background = "hsl(224, 36%, 15%)";
    document.querySelector('#calcval').style.color = "white";
    document.querySelector('.buttons').style.background = "hsl(223, 31%, 20%)"
    document.querySelector('.equal').style.background = "hsl(6, 63%, 50%)"
    document.querySelector('.equal').style.color = "white"
    document.querySelector('.equal').style.boxShadow= "0 2.5px hsl(6, 70%, 34%)"
    document.querySelector('.header').style.color = "white";
    

    
}
function switchCenter(){
    for ( let i = 0; i<mainColor.length; i++){
        mainColor[i].style.background = "hsl(0, 0%, 90%)"
    }
    for( let i = 0; i<buttons.length; i++){
        buttons[i].style.color = "black";
        buttons[i].style.background = "hsl(45, 7%, 89%)";
        buttons[i].style.boxShadow= "0 2.5px hsl(35, 11%, 61%)"
    }
    for( let i = 0; i<addButtons.length; i++){
        addButtons[i].style.color = "white";
        addButtons[i].style.background = "hsl(185, 42%, 37%)";
        addButtons[i].style.boxShadow= "0 2.5px hsl(185, 58%, 25%)"
    }
    toggle.classList.add('horizMoveCenter')
    toggle.classList.remove('horizMoveLeft')
    toggle.classList.remove('horizMoveRight') 
    toggle.style.background = "hsl(25, 98%, 40%)" 
    document.querySelector('#toggleContainer').style.background = "hsl(0, 5%, 81%)"
    document.querySelector('.screen').style.background = "hsl(0, 0%, 93%)"
    document.querySelector('.buttons').style.background = "hsl(0, 5%, 81%)"
    document.querySelector('.header').style.color = "black"
    document.querySelector('.equal').style.background = "hsl(25, 98%, 40%)"
    document.querySelector('.equal').style.color = "white";
    document.querySelector('.equal').style.boxShadow= "0 2.5px hsl(25, 99%, 27%)"
    document.querySelector('#calcval').style.color = "black";

}
function switchRight(){
    for ( let i = 0; i<mainColor.length; i++){
        mainColor[i].style.background = "hsl(268, 75%, 9%)"
    }
    for( let i = 0; i<buttons.length; i++){
        buttons[i].style.color = "hsl(52, 100%, 62%)";
        buttons[i].style.background = "hsl(268, 47%, 21%)";
        buttons[i].style.boxShadow= "0 2.5px hsl(290, 70%, 36%)"
    }
    for( let i = 0; i<addButtons.length; i++){
        addButtons[i].style.color = "white";
        addButtons[i].style.background = "hsl(281, 89%, 26%)";
        addButtons[i].style.boxShadow= "0 2.5px hsl(285, 91%, 52%)"
    }
    toggle.classList.add('horizMoveRight')
    toggle.classList.remove('horizMoveCenter')
    toggle.classList.remove('horizMoveLeft')
    toggle.style.background = "hsl(176, 100%, 44%)" 
    document.querySelector('#toggleContainer').style.background = "hsl(268, 71%, 12%)"
    document.body.style.background = "hsl(268, 75%, 9%)"
    document.querySelector('.header').style.color = "hsl(52, 100%, 62%)"
    document.querySelector('#calcval').style.color = "hsl(52, 100%, 62%)"; 
    document.querySelector('.screen').style.background = "hsl(268, 71%, 12%)"
    document.querySelector('.buttons').style.background = "hsl(268, 71%, 12%)"
    document.querySelector('.equal').style.background = "hsl(176, 100%, 44%)"
    document.querySelector('.equal').style.color = "black";
    document.querySelector('.equal').style.boxShadow= "0 2.5px hsl(177, 92%, 70%)"
}