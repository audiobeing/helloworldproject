var canvas;
var ctx;
var w = 1000;
var h = 600;



setUpCanvas();

function projectStart(){
    var message = 'welcome to the "hello world" project!'; 
    var i = 0; 
    var pos = 150; 
    ctx.font = "30px Courier";
    ctx.fillStyle = "dark grey"; 
    var space = [7,5,3,5,5,7,5, 5, 3,5, 5, 3,5,5, 5, 3,5,5,3,3,5,3, 5, 7,5,5,3,5, 5, 5,3,5,3,5,5,5]; 
    space = space.map((s)=> s+10)
    space.unshift(0)
    var s = setInterval(function(){
        // console.log(message[i])
        pos+= space[i]; 
        ctx.fillText(message[i], pos, h/4);
        i++; 
        if(i>message.length-1){
            clearInterval(s); 
        }
    }, 100)
   return ";)"
}

function setUpCanvas(){
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    // canvas.style.border = "5px dashed purple"
    }