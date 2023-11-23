

function change()
{
  if(document.getElementById("num").value<0 || document.getElementById("num2").value<0  ){
    document.getElementById("inv").innerHTML="Invalid Input"
  }
  else{
 var e=document.getElementById("num").value
var q=document.getElementById('num2').value
 let m=e/(q*q)
document.getElementById("zx").innerHTML="Your BMI is "+m
  if(m<18.5){
    document.getElementById("health").innerHTML="You are underweight"
  }
  else if(m>=18.5 && m<24.9){
    document.getElementById("health").innerHTML="You are healthy"
  }
  else if(m>=24.9 && m<29.9){
    document.getElementById("health").innerHTML="You are overweight"
  }
  else if(m>30){
    document.getElementById("health").innerHTML="You are obese"
  }
}
}