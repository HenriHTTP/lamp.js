const turnON = document.getElementById ("turnON")
const turnOFF = document.getElementById ("turnOFF")
const lamp = document.getElementById ("lamp")
function seachBroken(){ 
    return lamp.src.indexOf ('quebrada.jpg') > -1
}

function lampON(){ 
    if(!seachBroken())  {
        
        lamp.src="./img/ligada.jpg" 


    }
  
}
function lampOFF(){ 
    if(!seachBroken())  {
    lamp.src="./img/desligada.jpg" 
    }
}
function lampExit(){ 
    lamp.src="./img/quebrada.jpg" 

}
turnON.addEventListener ('click',lampON)
turnOFF.addEventListener ('click',lampOFF)
lamp.addEventListener('mouseover',lampON)
lamp.addEventListener('mouseleave',lampOFF)
lamp.addEventListener ('dblclick',lampExit)