 



function handleLedClick(cb) {
     Puck.eval("BTN.read()",function(x) { console.log(x); })
    if(cb.checked){
     //Puck.write('require("https://github.com/silvercrow/espruino-sandbox/blob/master/app.js");\n');
     Puck.write('analogWrite(13,1);\n');
    }else{
     Puck.write('analogWrite(13,0);\n');
    } 
  }
   function handleBackLightClick(cb){
   if(cb.checked){
     Puck.write('LED1.set();\n');
    }else{
     Puck.write('LED1.reset();\n');
    } 
   }
