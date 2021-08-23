Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
})

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function clickImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML='<img id="clickedImage" src="'+data_uri+'">';
    });
}

console.log(ml5.version);
myModel=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model loaded.");
}

function identify(){
    clickedImg=document.getElementById("clickedImage");
    myModel.classify(clickedImg,getResult);
}

function getResult(error,results){
if (error){console.error(error);}
else {console.log(results);
    document.getElementById("finalAnswer").innerHTML=results[0].label+"?";}
}