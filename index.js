let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let count=-1;
let onebutdis=true;
let twobutdis=true;
let threebutdis=true;
let fourbutdis=true;
let fivebutdis=true;
let sixbutdis=true;
let sevenbutdis=true;
let eightbutdis=true;
let ninebutdis=true;
document.querySelector("#o").addEventListener("click",()=>
{
    count=0;
    alert("Player O will start");
})
one.addEventListener("click",(e)=>{
    if(onebutdis)
    {
       count++;
    if(count%2==0)
    {
        onebutdis=false;
        one.innerText="X";
    }
    else 
    {
        onebutdis=false;
        one.innerText="O";
    }
    }
    setTimeout(checkwinner, 0); 
})
two.addEventListener("click",(e)=>{
    if(twobutdis)
    {
    count++;
    if(count%2==0)
        {
            twobutdis=false;
            two.innerText="X";
        }
        else 
        {
            twobutdis=false;
            two.innerText="O";
        }
        setTimeout(checkwinner, 0)

      }
})
three.addEventListener("click",(e)=>{
    if(threebutdis)
    {

    
    count++;
    if(count%2==0)
        {
            threebutdis=false;
            three.innerText="X";
        }
        else 
        {
            threebutdis=false;
            three.innerText="O";
        }
        setTimeout(checkwinner, 0)
}
})
four.addEventListener("click",(e)=>{
    if(fourbutdis)
    {

    
count++;
    //console.log("button four clicked");
    if(count%2==0)
        {
            fourbutdis=false;
            four.innerText="X";
        }
        else 
        {
           fourbutdis=false; 
            four.innerText="O";
        }
        setTimeout(checkwinner, 0)
}
})
five.addEventListener("click",(e)=>{
    if(fivebutdis)
    {
    count++;
    //console.log("button five clicked");
    if(count%2==0)
        {
            fivebutdis=false;
            five.innerText="X";
        }
        else 
        {
            fivebutdis=false;
            five.innerText="O";
        }
        setTimeout(checkwinner, 0)
}
})
six.addEventListener("click",(e)=>{
    if(sixbutdis)
    {
    count++;
    //console.log("button six clicked");
    if(count%2==0)
        {
            sixbutdis=false;
            six.innerText="X";
        }
        else 
        {
            sixbutdis=false;
            six.innerText="O";
        }
        setTimeout(checkwinner, 0); 
}})
seven.addEventListener("click",(e)=>{
    if(sevenbutdis)
    {
    count++;
    //console.log("button seven clicked");
    if(count%2==0)
        {
            sevenbutdis=false;
            seven.innerText="X";
        }
        else 
        {
            sevenbutdis=false;
            seven.innerText="O";
        }
        setTimeout(checkwinner, 0); 
}})
eight.addEventListener("click",(e)=>{
    if(eightbutdis)
    {
    count++;
    //console.log("button eight clicked");
    if(count%2==0)
        {
            eightbutdis=false;
            eight.innerText="X";
        }
        else 
        {
            eightbutdis=false;
            eight.innerText="O";
        }
        setTimeout(checkwinner, 0)
}})
nine.addEventListener("click",(e)=>{
    if(ninebutdis)
    {
    count++;
    //console.log("button nine clicked");
    if(count%2==0)
        {
            ninebutdis=false;
            nine.innerText="X";
        }
        else 
        {
            ninebutdis=false;
            nine.innerText="O";
        }
        setTimeout(checkwinner, 0) 
}})
function checkwinner()
{
if( (one.innerText=="X" && two.innerText=="X" && three.innerText=="X")    ||
    (four.innerText=="X" && five.innerText=="X" && six.innerText=="X")    ||
    (seven.innerText=="X" && eight.innerText=="X" && nine.innerText=="X") ||
    (one.innerText=="X" && four.innerText=="X" && seven.innerText=="X")   ||
    (two.innerText=="X" && five.innerText=="X" && eight.innerText=="X")   ||
    (three.innerText=="X" && six.innerText=="X" && nine.innerText=="X")   ||
    (one.innerText=="X" && five.innerText=="X" && nine.innerText=="X")    ||
    (three.innerText=="X" && five.innerText=="X" && seven.innerText=="X"))
{
    alert("player X wins the game");
}
else if(  (one.innerText=="O" && two.innerText=="O" && three.innerText=="O")    ||
(four.innerText=="O" && five.innerText=="O" && six.innerText=="O")    ||
(seven.innerText=="O" && eight.innerText=="O" && nine.innerText=="O") ||
(one.innerText=="O" && four.innerText=="O" && seven.innerText=="O")   ||
(two.innerText=="O" && five.innerText=="O" && eight.innerText=="O")   ||
(three.innerText=="O" && six.innerText=="O" && nine.innerText=="O")   ||
(one.innerText=="O" && five.innerText=="O" && nine.innerText=="O")    ||
(three.innerText=="O" && five.innerText=="O" && seven.innerText=="O"))
{
    alert("player O wins the game");
}
else if(!onebutdis &&
    !twobutdis &&
    !threebutdis &&
    !fourbutdis &&
    !fivebutdis &&
    !sixbutdis &&
    !sevenbutdis &&
    !eightbutdis &&
    !ninebutdis )
    {
       alert("its a draw!!");
    }
}
document.querySelector(".rebut").addEventListener("click",()=>{
    count=-1;
     onebutdis=true;
     twobutdis=true;
     threebutdis=true;
     fourbutdis=true;
     fivebutdis=true;
     sixbutdis=true;
    sevenbutdis=true;
    eightbutdis=true;
    ninebutdis=true;
    one.innerText="";
    two.innerText="";
    three.innerText="";
    four.innerText="";
    five.innerText="";
    six.innerText="";
    seven.innerText="";
    eight.innerText="";
    nine.innerText="";

    //console.log("clicked");
});