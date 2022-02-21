function Calculate(){
    let FirstNumber=document.getElementById("first").value;
    let SecondNumber=document.getElementById("second").value;
    let Operation=document.getElementById("operation").value;
    let result=0;
    if (Operation==="+"){
        result=Number(FirstNumber)+Number(SecondNumber);
    }
    else if(Operation==="-"){
        result=Number(FirstNumber)-Number(SecondNumber);
    }
    else if(Operation==="*"){
        result=Number(FirstNumber)*Number(SecondNumber)
    }
    else if(Operation==="/"){
        result=Number(FirstNumber)/Number(SecondNumber)
    }
    else{
        alert("Wrong operation.This cannot be calculated")
    }
    document.getElementById("result").innerHTML="Answer:"+String(result);

}