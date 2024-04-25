let numero1 = parseInt(prompt("Digite o numerador"));
let numero2 = parseInt(prompt("Digite o denominador"));
let resultado;
 
if (numero2 == 0)
{
    alert ("Não é divisivel por zero.");
}
else
{
    resultado = numero1 / numero2;
    
    alert (numero1 + " " + "dividido por " + numero2 + " é " + resultado);
}