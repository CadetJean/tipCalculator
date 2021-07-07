document.querySelector('#btnCalculate').addEventListener('click', function(){
   
    let billAmount=document.querySelector('#userInputOne').value;
    let ratingPercent=document.querySelector('.choices').value;
    let peopleAtTable=document.querySelector('#userInputTwo').value;
    if(!billAmount || !peopleAtTable){
        alert("please fill out evething")
    }else{
             let tip =(billAmount/peopleAtTable)*ratingPercent;
    document.querySelector('p2').textContent=tip.toFixed(2);
    }

    
}
)
