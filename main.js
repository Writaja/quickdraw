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
    check_sketch()
    if(draw_sketch==sketch){
        answer_holder="set";
        score=score+1;
        document.getElementById("score").innerHTML="Score: "+score;

    }
    }
    function clear_canvas(){
        background("white");
    }
    function sketch_check(){
timer_counter++;
document.getElementById("timer").innerHTML="Timer: "+timer_counter;
if(timer_counter>400){
    timer_counter=0;
}
   if(timer_check=="completed"|| answer_holder="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();
   }
    }
    function updateCanvas(){
        background="white";
        sketch=Element_of_array;
        document.getElementById("sketch_to_be_drawn").innerHTML="Sketch to be drawn"+sketch;
    }
    
    
