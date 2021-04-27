
//next sketch below
let sketch1 = function(p1) {
//ssssss
  let daylight;
  let lamps1;
  let lamps2;
  let lamps3;
  let lamps4;
  let imgX = 960;
  let imgY = 640;
  let sliderPOS1X = 10;
  let sliderPOS2X = 430;
  let sliderPOS3X = 410;
  let sliderPOS1Y = imgY+20;

  const form_element = document.getElementById('panel');

  const slider_1 = form_element.elements.slider_1;
  slider_1.style.width = '400px';

  // pobranie wartosci suwaka
  // const value = slider_1.value;

  // przypisanie wartosci suwakowi
  // slider_1.value = 50;

  setInterval(function () {
    slider_1.value = Number(slider_1.value) + 1;
  }, 1000);

   p1.preload = function() {
    daylight = p1.loadImage('DL.jpg');
    lamps1 = p1.loadImage('CCT1.jpg');
    lamps2 = p1.loadImage('CCT2.jpg');
    lamps3 = p1.loadImage('CCT3.jpg');

  };

  p1.setup = function() {
    p1.createCanvas(imgX, imgY+100);
    daylight.resize(imgX,imgY);
    lamps1.resize(imgX,imgY);
    lamps2.resize(imgX,imgY);
    lamps3.resize(imgX,imgY);

    xDLslider = p1.createSlider(0, 255, 0);
    xDLslider.position(sliderPOS1X, sliderPOS1Y);
    xDLslider.style('width', '400px');

    xL1slider = p1.createSlider(0, 255, 0);
    xL1slider.position(sliderPOS2X, sliderPOS1Y);
    xL1slider.style('width', '400px');

    xL2slider = p1.createSlider(0, 255, 0);
    xL2slider.position(sliderPOS2X, sliderPOS1Y);
    xL2slider.style('width', '400px');

    xL3slider = p1.createSlider(0, 255, 0);
    xL3slider.position(sliderPOS2X, sliderPOS1Y);
    xL3slider.style('width', '400px');




    xL2slider.hide();
    xL3slider.hide();



    xButton1 = p1.createButton('CCT1');
    xButton1.position(sliderPOS2X, sliderPOS1Y+40);
    xButton1.mousePressed(p1.cct1);
    xButton1.size(130,20);

    xButton2 = p1.createButton('CCT2');
    xButton2.position(sliderPOS2X+135, sliderPOS1Y+40);
    xButton2.mousePressed(p1.cct2);
    xButton2.size(130,20);

    xButton3 = p1.createButton('CCT3');
    xButton3.position(sliderPOS2X+270, sliderPOS1Y+40);
    xButton3.mousePressed(p1.cct3);
    xButton3.size(130,20);




  };

  p1.cct1 = function() {
    if (xL2slider.value() > 0) {
      xL1slider.value(xL2slider.value());
    }
    else if (xL3slider.value() > 0) {
      xL1slider.value(xL3slider.value());
    }

xL2slider.value(0);
xL3slider.value(0);


xL1slider.show();
xL2slider.hide();
xL3slider.hide();



  }

  p1.cct2 = function() {
    if (xL1slider.value() > 0) {
      xL2slider.value(xL1slider.value());
    }
    else if (xL3slider.value() > 0) {
      xL2slider.value(xL3slider.value());
    }

xL1slider.value(0);
xL3slider.value(0);


xL1slider.hide();
xL2slider.show();
xL3slider.hide();

  }

  p1.cct3 = function() {
    if (xL1slider.value() > 0) {
      xL3slider.value(xL1slider.value());
    }
    else if (xL2slider.value() > 0) {
      xL3slider.value(xL2slider.value());
    }

xL1slider.value(0);
xL2slider.value(0);


xL1slider.hide();
xL2slider.hide();
xL3slider.show();

  }





  p1.draw = function() {
    p1.background(0);
    p1.blendMode(p1.SCREEN);
  const xDLvalue = xDLslider.value();
  const xL1value = xL1slider.value();
  const xL2value = xL2slider.value();
  const xL3value = xL3slider.value();

    p1.tint(255, 255-xDLvalue);
    p1.image(daylight,0,0);
    p1.tint(255, xL1value);
    p1.image(lamps1,0,0);
    p1.tint(255, xL2value);
    p1.image(lamps2,0,0);
    p1.tint(255, xL3value);
    p1.image(lamps3,0,0);

    p1.blendMode(p1.BLEND);
    p1.fill(200);
    p1.rect(0, imgY, imgX, 200);
    p1.fill(0);
    p1.textSize(16);
    p1.text('Day', sliderPOS1X + 30, imgY+50);
    p1.text('Night', sliderPOS1X + 350, imgY+50);
    p1.text('Electric lighting', sliderPOS2X + 30, imgY+50);



  };
};

let myp51 = new p5(sketch1, "element1");
