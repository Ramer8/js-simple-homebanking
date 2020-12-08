//Declaración de variables
var nombreUsuario = "Juan Pérez";
var saldobackup = 0;
var saldoCuenta = 250000;
var limiteExtraccion = 60000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentAmiga1 = 1234567;
var cuentAmiga2 = 7654321;
var codigo = 1981;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function()
{
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
  alert("Ingrese cualquier tecla para empezar a operar");
  iniciarSesion();
}
//Funciones que tenes que completar
function suma$(dinero)
  {
   saldoparcial = saldoCuenta;
   saldoCuenta = (saldoparcial+dinero);
  }
function cambiarLimiteDeExtraccion() 
 {
    var limiteext = prompt("Ingrese el nuevo limite de extracción");
    var nvolimiteext = parseInt(limiteext);
    limiteExtraccion = nvolimiteext; 
    actualizarLimiteEnPantalla(limiteExtraccion);
    alert("El nuevo limite de extracción es: $ "+limiteExtraccion);
  }
function extraerDinero() 
{
   var dinero = prompt("Ingrese cantidad de Dinero a retirar");
   var ingreso$ = parseInt(dinero);
   console.log("el monto a retirar es:"+ingreso$);
   if ((ingreso$<=saldoCuenta) && (ingreso$<=limiteExtraccion))
  {
    console.log("hay saldo disponible y no supera el limite");
    if((ingreso$%100)==0)
    {
     console.log("es multiplo de 100");
     saldoparcial = saldoCuenta;
     saldoCuenta = (saldoparcial-ingreso$);
     var saldoanterior = (saldoCuenta+ingreso$);
     actualizarSaldoEnPantalla()
     var nvolimiteext = (limiteExtraccion-ingreso$);
     limiteExtraccion = nvolimiteext; 
     actualizarLimiteEnPantalla()
     alert("Has retirado: $"+ingreso$+"\n"+"Saldo anterior: $"+saldoanterior+"\n"+"Saldo actual: $"+saldoCuenta);
    }
     else
      {
       alert("ingrese un nuevo monto multiplo de 100");
       console.log("ingrese un nuevo monto multiplo de 100");
      }
  } 
    else if (ingreso$<=saldoCuenta)
    {
     alert("El monto ingresado supera el limite de extracción.");
    }
    else 
     {
      alert("El monto ingresado supera el Saldo Disponible");
     }
}
function depositarDinero() 
   {
    var dinero = prompt("Ingrese cantidad de Dinero a Depositar");
    var ingreso$ = parseInt(dinero);
    suma$(ingreso$);
    var saldoanterior = (saldoCuenta-ingreso$);
    actualizarSaldoEnPantalla()
    alert("Has depositado:$ "+ingreso$+"\n"+"Saldo anterior:$ "+saldoanterior+"\n"+"Saldo actual:$ "+saldoCuenta);
   }
function pagarServicio()
{
 var servicio$ = prompt("Ingrese el numero que corresponda al servicio que quieres pagar"+"\n"+"1 - Agua."+"\n"+"2 - Luz."+"\n"+"3 - Internet."+"\n"+"4 - Telefono.");
 console.log("Elegiste el: "+servicio$);
    switch (servicio$)
    { case "1":
      if (saldoCuenta>=agua)
       { 
         saldoCuenta=saldoCuenta-agua;
         console.log(saldoCuenta); console.log(agua);
         var saldoanterior = (saldoCuenta+agua);
         alert("Has pagado el Servicio de Agua "+"\n"+"Dinero descontado: $"+agua+"\n"+"Saldo anterior: $"+saldoanterior+"\n"+"Saldo actual: $"+saldoCuenta)
         actualizarSaldoEnPantalla();
       } 
       else 
       { 
          alert("No tienes saldo suficiente");
        }
        break;
        case "2":
        if (saldoCuenta>=luz)
        {
          saldoCuenta=saldoCuenta-luz;
          console.log(saldoCuenta); console.log(luz);
          var saldoanterior = (saldoCuenta+luz);
          alert("Has pagado el Servicio de Luz "+"\n"+"Dinero descontado: $"+luz+"\n"+"Saldo anterior: $"+saldoanterior+"\n"+"Saldo actual: $"+saldoCuenta)
          actualizarSaldoEnPantalla();
        } 
        else 
        {
          alert("No tienes saldo suficiente");
        }
        break;
        case "3":
        if (saldoCuenta>=internet)
        {
          saldoCuenta=saldoCuenta-internet;
          console.log(saldoCuenta); console.log(internet);
          var saldoanterior = (saldoCuenta+internet);
          alert("Has pagado el Servicio de Internet "+"\n"+"Dinero descontado: $"+internet+"\n"+"Saldo anterior: $"+saldoanterior+"\n"+"Saldo actual: $"+saldoCuenta)
          actualizarSaldoEnPantalla();
        } 
        else 
        {
          alert("No tienes saldo suficiente");
        }
        break;
        case "4":
        if (saldoCuenta>=telefono)
        {
          saldoCuenta=saldoCuenta-telefono;
          console.log(saldoCuenta); console.log(telefono);
          var saldoanterior = (saldoCuenta+telefono);
          alert("Has pagado el Servicio de Telefono "+"\n"+"Dinero descontado: $"+telefono+"\n"+"Saldo anterior: $"+saldoanterior+"\n"+"Saldo actual: $"+saldoCuenta)
          actualizarSaldoEnPantalla();
        } 
         else 
         {
          alert("No tienes saldo suficiente");
         }
         break;
         default:
         alert("No existe el servicio que se ha selecionado ("+ servicio$ +").");
      }
}
function pagaragua()
{
  if (saldoCuenta>=agua)
 {
   saldoCuenta=saldoCuenta-agua;
   console.log(saldoCuenta); console.log(agua);
   var saldoanterior = (saldoCuenta+agua);
   alert("Has pagado el Servicio de Agua "+"\n"+"Dinero descontado: $"+agua+"\n"+"Saldo anterior: $"+saldoanterior+"\n"+"Saldo actual: $"+saldoCuenta)
   actualizarSaldoEnPantalla();
   } 
  else 
    {
     alert("No tienes saldo suficiente");
    }
  }
function transferirDinero() 
{
  var transf$ = prompt("Ingrese el monto de dinero que desea transerir");
  if (saldoCuenta>=transf$)
  {
    var nrocta$ = prompt("Ingrese el numero de cuenta a la que desea transferir dinero");
    if (nrocta$ ==cuentAmiga1)   {
    saldoCuenta=saldoCuenta-transf$;
    alert("Se han transferido: $"+transf$+"\n"+"Cuenta destino: "+cuentAmiga1);
    actualizarSaldoEnPantalla();  }
    else if (nrocta$ ==cuentAmiga2)
    {
     saldoCuenta=saldoCuenta-transf$;
     alert("Se han transferido: $"+transf$+"\n"+"Cuenta destino: "+cuentAmiga2);
     actualizarSaldoEnPantalla();
    }
    else
    {
    alert("Solo puede transferirse dinero a una Cuenta Amiga");}
    }
    else
    {
    alert("No tienes saldo suficiente para trasnferir esa cantidad de dinero");
    }
}
function iniciarSesion()
{
 var code = prompt("Por favor, ingrese el código de seguridad de su cuenta");
 if (codigo == code) 
 {
   alert("Bienvenido/a: "+nombreUsuario+", ya puedes comenzar a realizar operaciones")
  }
  else 
  {
   saldobackup=saldoCuenta;
   saldoCuenta=0;
   alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad")
   actualizarSaldoEnPantalla();
  }
}
//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() 
{
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}
function actualizarSaldoEnPantalla() 
{
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}
function actualizarLimiteEnPantalla() 
{
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
   