let result=document.getElementById("Result");
let num=result.innerHTML;

function SimpleMath(action){

    //Check action
    if(action=="minus"){
        num--;
    } else if(action=="plus"){
        num++;
    } else num=0
    
    //Check value of num to change color
    if(num<0){
        result.style.color="red"
    }
    else if(num==0){
        result.style.color="#102A42"
    } else {
        result.style.color="#008000"
    }

    //Show result
    result.innerHTML=num.toString()
}
