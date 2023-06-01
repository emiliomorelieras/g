objectDetector="";
img="";
objects= [];
status="";

function preload(){
    img = loadImage('Darth revan.webp');
  }
  
  
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
  objectDetector=ml5.objectDetector("coscossd",modelLoaded);


    document.getElementById("status").innerHTML = "Estado: detectando objetos";
  }
  
  function modelLoaded();{
    console.log("Modelo cargado");
    status=true;
    objectDetector.detect(img, gotResults);
  }
  function gotResults(error,results);{
    if (error) {
        console.log(error);
    
    }else{
        console.log(results);
    }

  }