var r1=Math.floor(Math.random()*6)+1;
var r2=Math.floor(Math.random()*6)+1;

var i=document.getElementsByTagName("img");
i[0].src="./images/dice"+r1+".png";
i[1].src="./images/dice"+r2+".png";

var h=document.querySelector("h1");

if(r1>r2)
{

    h.textContent="🚩Player1 is winner!";

}
else if(r1<r2)
{

    h.textContent="Player2 is winner!🚩";

}
else if(r1==r2)
{

    h.textContent="Draw!!";

}