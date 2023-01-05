let counts=setInterval(updated,3);
let upto=0;
let upto1 = 200;
function updated(){
    var count= document.getElementById("c3");
    count.innerHTML=++upto;
    if(upto===200)
    {
        clearInterval(counts);
        counts = setInterval(updatedTill300,100);
    }
}
function updatedTill300(){
    var count= document.getElementById("c3");
    count.innerHTML=++upto1;
    if(upto1===205)
    {
        clearInterval(counts);
    }
}
let counts1=setInterval(updated1,3);
let upto2=0;
let upto3 = 2;
function updated1(){
    var count1= document.getElementById("c25");
    count1.innerHTML=++upto2;
    if(upto2===2)
    {
        clearInterval(counts1);
        counts1 = setInterval(updated1Till250,400);
    }
}
function updated1Till250(){
    var count1= document.getElementById("c25");
    count1.innerHTML=++upto3;
    if(upto3===4)
    {
        clearInterval(counts1);
    }
}
let counts2=setInterval(updated2,3);
let upto4=0;
let upto5 = 5;
function updated2(){
    var count2= document.getElementById("c5");
    count2.innerHTML=++upto4;
    if(upto4===5)
    {
        clearInterval(counts2);
        counts2 = setInterval(updated2Till500,400);
    }
}
function updated2Till500(){
    var count2= document.getElementById("c5");
    count2.innerHTML=++upto5;
    if(upto5===7)
    {
        clearInterval(counts2);
    }
}