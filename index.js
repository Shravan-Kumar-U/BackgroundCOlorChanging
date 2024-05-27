const colorChange = function (){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];

    }
    return color;

}

let interval

const change = function(){
    
    if(!null){
        const color =  function (){
            document.body.style.backgroundColor=colorChange();
        }
        interval = setInterval(color,1000);
    }
    


}


const exit = function (){
    clearInterval(interval);
    interval=null;
}

document.querySelector("#start").addEventListener("click",change,false)
document.querySelector("#stop").addEventListener("click",exit,false)

