function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
    
    }
    function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.SpeechSynthesis;
    
    }
    function draw(){
    

    }
    
    function clear_canvas(){
        background("white");
    }
    
    function updateCanvas(){
        background="white";
        sketch=Element_of_array;
        document.getElementById("sketch_to_be_drawn").innerHTML="Sketch to be drawn"+sketch;
    }
    function classifyCanvas(){
        classifier.classify(canvas,gotresult);
   
    }
    function gotresult(error,results){
   if(error){
       console.error(error);
   }
   console.log(results);
   document.getElementById("label").innerHTML="label: "+results[0].label;
   document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%";
    utterThis=new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);
    }
    
    
