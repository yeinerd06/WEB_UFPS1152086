function generarClick(){
    
    var quota = document.getElementById("quota");
    var output = document.getElementById("output");

    const primos = generatePrimes(quota.value);
    output.innerHTML = "<h1>Generó el resultado: " + quota.value + "</h1>";
}

function reiniciarClick(){
    location.href = "index.html";
}

const MAX_PRIME = 10000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
    return primes;
  }

  function mostrarMensaje(mensaje){
    document.getElementById("output").innerHTML = mensaje;
  }

  function mostrarMensajeTxt(mensaje){
    document.getElementById("txt").value = mensaje;
  }

  function calcular(num1, num2, miFuncion){
    let suma = num1 + num2;
    miFuncion(suma);
  }

  function mostrarHora(){
    let d = new Date();
    
    let mensaje = "<h1>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() 
        + ":" + d.getMilliseconds()+ "<h1>";
    document.getElementById("output").innerHTML = mensaje;
  }

  setTimeout(mostrarMensaje, 5000, "Hola a todos");

  mostrarMensajeTxt("Ejecutó asincrónico");

  setInterval(mostrarHora,1);

  function obtenerFoto(callback){
    let req = new XMLHttpRequest();
    req.open('GET',"imagen.html");
    req.onload = function(){
        if (req.status==200){
            callback(this.responseText);
        } else {
            callback("Error: " + req.status);
        }
    }
    req.send();
  }

  function mostrarMensajeDiv(mensaje){
    document.getElementById("divRta").innerHTML = mensaje;
  }

