let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function pista(distancia){
 if(distancia < 30){
    return 'Hirviendo !!!';
}else if(distancia < 40){
    return 'Muy caliente';
}else if(distancia < 50){
    return 'Caliente' ;
}else if(distancia < 60){
    return 'Tibio';
}else if(distancia < 100){
    return 'Frio';
}else if(distancia < 200 ){
    return 'Muy frio';
}else if(distancia < 300){
    return 'Helado!!';
}else if(distancia < 400){
    return 'CONGELADO!!';
}else if(distancia < 500){
    return 'ERA DE HIELO';
}

}