const WIDTH = 400;
const HEIGHT = 400;

let target  = {
x :getRandomNumber(WIDTH),
y :getRandomNumber(HEIGHT)
}

let $map = document.getElementById('map');
let $distancia = document.getElementById('distancia');
let $title = document.getElementById('title');
let clicks = 0;
$map.addEventListener('click' , function(e){
    clicks++;
    $title.className = 'oculto';
    let distancia = getDistance(e, target);
    let laPista = pista(distancia);
   $distancia.innerHTML = laPista;
   $final = document.querySelector('#final');
   $boton = document.querySelector('#reset');
   $tablero = document.querySelector('#tablero');

  if(distancia < 20){
   $final.className = '';
   $boton.className = ''
   $tablero.className = 'oculto';
   $final.textContent = 'LO ENCONTRASTE EN ' + clicks + ' CLICKS';
 }
  if(clicks > 40){
  $tablero.className = 'oculto';
  $final.className = '';
  $final.textContent = 'PERDISTE PIRATA';
  $boton.className = '';
 }
})