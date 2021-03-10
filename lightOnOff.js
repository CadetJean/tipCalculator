var billAmount=document.getElementById("userInput1").value;
var numberPeople=document.getElementById("userInput2").value;
var allContainer=document.getElementsByTagName("body");
var calculate=document.getElementById("btnCalculate");
var serviceQuality=document.getElementById("choices").value;

calculate.addEventListener("click",function(){
    var percentageTip=(serviceQuality*100)*billAmount/100;
//first convert from percentage to dolar than divide by number of people
var amountPerPeople=percentageTip*billAmount/numberPeople;

console.log(amountPerPeople);
})




/*
percentage =(percentageChoose*100)*billAmount/100


*/
