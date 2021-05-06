Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("webcam-view");

Webcam.attach('webcam-view');

function takePicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("webcam-result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5p65yPkzv/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded")
}
