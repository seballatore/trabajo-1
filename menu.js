function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function validar(){
    if (document.getElementById('condiciones').checked){
    return true;
    }
    else
    {
    alert("El formulario no puede ser envia si no acepta el contrato");
    return false;
    }
    }
  
  function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}