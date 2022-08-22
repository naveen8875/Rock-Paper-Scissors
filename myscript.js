let rockclick = document.getElementById('rock')
let paperclick = document.getElementById('paper')
let scissorclick =document.getElementById('scissors')
let reset = document.getElementById('reset')
let choice=5;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
rockclick.onclick = () => {choice=0;
console.log(choice);
cc = getRandomInt(0,3)
        console.log(cc)
if(cc==0)
    {
        document.getElementById("demo").innerHTML="TIE";
        document.getElementById("cc").innerHTML="&#9994;";
        document.getElementById("ccpick").style.display="block";
    }
    if(cc==1)
    {
        document.getElementById("demo").innerHTML="YOU LOSE";
        document.getElementById("cc").innerHTML="&#9995;";
        document.getElementById("ccpick").style.display="block";
    }
    if(cc==2)
    {
        document.getElementById("demo").innerHTML="YOU WIN";
        document.getElementById("cc").innerHTML="&#9986;";
        document.getElementById("ccpick").style.display="block";
    }
}
paperclick.onclick = () =>  {choice=1;
    console.log(choice);
    cc = getRandomInt(0,3)
        console.log(cc)
    if(cc==1)
    {
        document.getElementById("cc").innerHTML="&#9995;";
        document.getElementById("ccpick").style.display="block";
        document.getElementById("demo").innerHTML="TIE";
    }
    if(cc==2)
    {
        document.getElementById("cc").innerHTML="&#9986;";
        document.getElementById("ccpick").style.display="block";
        document.getElementById("demo").innerHTML="YOU LOSE";

    }
    if(cc==0)
    {
        document.getElementById("demo").innerHTML="YOU WIN";
        document.getElementById("cc").innerHTML="&#9994;";
        document.getElementById("ccpick").style.display="block";
    }
}
scissorclick.onclick = () =>  {choice=2;
    console.log(choice);
    cc = getRandomInt(0,3)
        console.log(cc)
    if(cc==2)
    {
        document.getElementById("cc").innerHTML="&#9986;";
        document.getElementById("ccpick").style.display="block";
        document.getElementById("demo").innerHTML="TIE";
    }
    if(cc==0)
    {
        document.getElementById("cc").innerHTML="&#9994;";
        document.getElementById("ccpick").style.display="block";
        document.getElementById("demo").innerHTML="YOU LOSE";
    }
    if(cc==1)
    {
        document.getElementById("cc").innerHTML="&#9995;";
        document.getElementById("ccpick").style.display="block";
        document.getElementById("demo").innerHTML="YOU WIN";
    }
}
reset.onclick = () => 
{
    document.getElementById("demo").innerHTML="";document.getElementById("cc").innerHTML="";
    document.getElementById("ccpick").style.display="none";
    
}


