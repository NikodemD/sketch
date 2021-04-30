let sketch1 = function(p1) {

    let daylight;
    let lamps1;
    let lamps2;
    let lamps3;

    let imgX = 960;
    let imgY = 640;
   
    

    /*
    setInterval(function () {
      slider_1.value = Number(slider_1.value) + 1;
    }, 100);
  */
     p1.preload = function() {
      daylight = p1.loadImage('DL.jpg');
      lamps1 = p1.loadImage('CCT1.jpg');
      lamps2 = p1.loadImage('CCT2.jpg');
      lamps3 = p1.loadImage('CCT3.jpg');
  
    };
  
    p1.setup = function() {
      p1.createCanvas(imgX, imgY);
      daylight.resize(imgX,imgY);
      lamps1.resize(imgX,imgY);
      lamps2.resize(imgX,imgY);
      lamps3.resize(imgX,imgY);

    };
  
  
    p1.draw = function() {
      p1.background(0);
      p1.blendMode(p1.SCREEN);

      let form_element = document.getElementById('panel');
      let slider_1 = form_element.elements.slider_1;
      let valueX1 = slider_1.value;
    
      p1.tint(255, 255-valueX1);
      p1.image(daylight,0,0);
      p1.tint(255, 0);
      p1.image(lamps1,0,0);
      p1.tint(255, xL2value);
      p1.image(lamps2,0,0);
      p1.tint(255, xL3value);
      p1.image(lamps3,0,0);
  
      p1.blendMode(p1.BLEND);
      

    };
    const form_element = document.getElementById('panel');
    const slider_1 = form_element.elements.slider_1;
    slider_1.value = 0;
    slider_1.addEventListener('input',p1.draw);

    //Tutaj pytanie: funkcja BLEND SCREEN nie bierze aktualnej wartosci suwaka i nie aktualizuje, tylko tak jakby 'dodaje' wartosc.
    //Widac to dobrze, gdy sie porowna stary kod z nowym. Co robie zle?
  };
  
  let myp51 = new p5(sketch1, "element1");
