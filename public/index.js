var canvas, gl,
    ratio,
    vertices,
    velocities,
    freqArr,
    cw,
    ch,
    colorLoc,
    thetaArr,
    velThetaArr,
    velRadArr,
    boldRateArr,
    drawType,
    numLines = 10000;
var target = [];
var randomTargetXArr = [], randomTargetYArr = [];
drawType = 1;


function loadScene() {
  canvas = document.getElementById("c");
  gl = canvas.getContext("experimental-webgl");
  if (!gl) {
    alert("There's no WebGL context available.");
    return;
  }
  cw = window.innerWidth;
  ch = window.innerHeight;
  canvas.width = cw;
  canvas.height = ch;
  gl.viewport(0, 0, canvas.width, canvas.height);

  var vertexShaderScript = document.getElementById("shader-vs");
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderScript.text);
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    alert("Couldn't compile the vertex shader");
    gl.deleteShader(vertexShader);
    return;
  }


  var fragmentShaderScript = document.getElementById("shader-fs");
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderScript.text);
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    alert("Couldn't compile the fragment shader");
    gl.deleteShader(fragmentShader);
    return;
  }


  gl.program = gl.createProgram();
  gl.attachShader(gl.program, vertexShader);
  gl.attachShader(gl.program, fragmentShader);
  gl.linkProgram(gl.program);
  if (!gl.getProgramParameter(gl.program, gl.LINK_STATUS)) {
    alert("Unable to initialise shaders");
    gl.deleteProgram(gl.program);
    gl.deleteProgram(vertexShader);
    gl.deleteProgram(fragmentShader);
    return;
  }

  gl.useProgram(gl.program);

  var vertexPosition = gl.getAttribLocation(gl.program, "vertexPosition");

  gl.enableVertexAttribArray(vertexPosition);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clearDepth(1.0);


  gl.enable(gl.BLEND);
  gl.disable(gl.DEPTH_TEST);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE);


  var vertexBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);


  // ------------------

  setup();

  // ------------------


  vertices = new Float32Array(vertices);
  velocities = new Float32Array(velocities);

  thetaArr = new Float32Array(thetaArr);
  velThetaArr = new Float32Array(velThetaArr);
  velRadArr = new Float32Array(velRadArr);


  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);


  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  var fieldOfView = 30.0;
  var aspectRatio = canvas.width / canvas.height;
  var nearPlane = 1.0;
  var farPlane = 10000.0;
  var top = nearPlane * Math.tan(fieldOfView * Math.PI / 360.0);
  var bottom = -top;
  var right = top * aspectRatio;
  var left = -right;

  var a = (right + left) / (right - left);
  var b = (top + bottom) / (top - bottom);
  var c = (farPlane + nearPlane) / (farPlane - nearPlane);
  var d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
  var x = (2 * nearPlane) / (right - left);
  var y = (2 * nearPlane) / (top - bottom);
  var perspectiveMatrix = [
    x, 0, a, 0,
    0, y, b, 0,
    0, 0, c, d,
    0, 0, -1, 0
  ];

  var modelViewMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];
  var vertexPosAttribLocation = gl.getAttribLocation(gl.program, "vertexPosition");
  gl.vertexAttribPointer(vertexPosAttribLocation, 3.0, gl.FLOAT, false, 0, 0);
  var uModelViewMatrix = gl.getUniformLocation(gl.program, "modelViewMatrix");
  var uPerspectiveMatrix = gl.getUniformLocation(gl.program, "perspectiveMatrix");
  gl.uniformMatrix4fv(uModelViewMatrix, false, new Float32Array(perspectiveMatrix));
  gl.uniformMatrix4fv(uPerspectiveMatrix, false, new Float32Array(modelViewMatrix));
  //gl.drawArrays( gl.LINES, 0, numLines );
  //gl.flush();

  //setInterval( drawScene, 1000 / 40 );
  animate();
  setTimeout(timer, 1500);
}
var count = 0;
var cn = 0;

function animate() {
  requestAnimationFrame(animate);
  drawScene();
}


function drawScene() {
  draw();

  gl.lineWidth(1);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  //gl.drawArrays( gl.LINES_STRIP, 0, numLines );
  gl.drawArrays(gl.LINES, 0, numLines);
  //gl.drawArrays( gl.QUAD_STRIP, 0, numLines );

  gl.flush();
}

// ===================================
function setup() {
  setup2();
}


function draw() {
  switch (drawType) {
    case 0:
      draw0();
      break;
    case 1:
      draw1();
      break;
      /*case 2:
        draw2();
        break;*/
  }
}

// ===================================

/*function setup1() {

  vertices = [];
  velThetaArr = [];
  velRadArr = [];
  ratio = cw / ch;
  velocities = [];

  // -------------------------------

  for (var i = 0; i < numLines; i++) {

    var rad = Math.random() * 2 + .5;
    var theta = Math.random() * Math.PI * 2;
    var velTheta = Math.random() * Math.PI * 2;

    vertices.push(rad * Math.cos(theta), rad * Math.sin(theta), 1.83);//(Math.random() * 2 - 1)*ratio, Math.random() * 2 - 1, 1.83 );
    vertices.push(rad * Math.cos(theta), rad * Math.sin(theta), 1.83);

    velocities.push((Math.random() * 2 - 1) * .05, (Math.random() * 2 - 1) * .05, .93 + Math.random() * .02);
    velThetaArr.push(velTheta);
    velRadArr.push(rad);

  }

}*/

// -------------------------------

function setup2() {

  vertices = [];
  velThetaArr = [];
  velRadArr = [];
  ratio = cw / ch;
  velocities = [];
  thetaArr = [];
  freqArr = [];
  boldRateArr = [];

  // -------------------------------

  for (var ii = 0; ii < numLines; ii++) {
    var rad = ( 0.1 + .2 * Math.random() );
    var theta = Math.random() * Math.PI * 2;
    var velTheta = Math.random() * Math.PI * 2 / 30;
    var freq = Math.random() * 0.12 + 0.03;
    var boldRate = Math.random() * .04 + .01;
    var randomPosX = (Math.random() * 2  - 1) * window.innerWidth / window.innerHeight;
    var randomPosY = Math.random() * 2 - 1;

    vertices.push(rad * Math.cos(theta), rad * Math.sin(theta), 1.83);
    vertices.push(rad * Math.cos(theta), rad * Math.sin(theta), 1.83);

    thetaArr.push(theta);
    velThetaArr.push(velTheta);
    velRadArr.push(rad);
    freqArr.push(freq);
    boldRateArr.push(boldRate);


    randomTargetXArr.push(randomPosX);
    randomTargetYArr.push(randomPosY);
  }

  freqArr = new Float32Array(freqArr);

}

// -------------------------------


// ===================================

function draw0() {

  var i, n = vertices.length, p, bp;
  var px, py;
  var pTheta;
  var rad;
  var num;
  var targetX, targetY;

  for (i = 0; i < numLines * 2; i += 2) {
    count += .3;
    bp = i * 3;

    vertices[bp] = vertices[bp + 3];
    vertices[bp + 1] = vertices[bp + 4];

    num = parseInt(i / 2);
    targetX = randomTargetXArr[num];
    targetY = randomTargetYArr[num];


    px = vertices[bp + 3];
    px += (targetX - px) * (Math.random() * .04 + .06);
    vertices[bp + 3] = px;


    //py = (Math.sin(cn) + 1) * .2 * (Math.random() * .5 - .25);
    py = vertices[bp + 4];
    py += (targetY - py) * (Math.random() * .04 + .06);
    vertices[bp + 4] = py;

  }
}

// -------------------------------

function draw1() {

  var i, n = vertices.length, p, bp;
  var px, py;
  var pTheta;
  var rad;
  var num;
  var targetX, targetY;

  for (i = 0; i < numLines * 2; i += 2) {
    count += .3;
    bp = i * 3;

    vertices[bp] = vertices[bp + 3];
    vertices[bp + 1] = vertices[bp + 4];

    num = parseInt(i / 2);
    pTheta = thetaArr[num];
    rad = velRadArr[num];

    pTheta = pTheta + velThetaArr[num];
    thetaArr[num] = pTheta;

    targetX = rad * Math.cos(pTheta);
    targetY = rad * Math.sin(pTheta);

    px = vertices[bp + 3];
    px += (targetX - px) * (Math.random() * .1 + .1);
    vertices[bp + 3] = px;


    //py = (Math.sin(cn) + 1) * .2 * (Math.random() * .5 - .25);
    py = vertices[bp + 4];
    py += (targetY - py) * (Math.random() * .1 + .1);
    vertices[bp + 4] = py;
  }
}

// -------------------------------

/*function draw2() {
  cn += .1;

  var i, n = vertices.length, p, bp;
  var px, py;
  var pTheta;
  var rad;
  var num;

  for (i = 0; i < numLines * 2; i += 2) {
    count += .3;
    bp = i * 3;


    vertices[bp] = vertices[bp + 3];
    vertices[bp + 1] = vertices[bp + 4];

    num = parseInt(i / 2);
    pTheta = thetaArr[num];

    rad = velRadArr[num];// + Math.cos(pTheta + i * freqArr[i]) *  boldRateArr[num];

    pTheta = pTheta + velThetaArr[num];
    thetaArr[num] = pTheta;

    px = vertices[bp + 3];
    px = rad * Math.cos(pTheta) * 0.1 + px;
    vertices[bp + 3] = px;


    //py = (Math.sin(cn) + 1) * .2 * (Math.random() * .5 - .25);
    py = vertices[bp + 4];

    py = py + rad * Math.sin(pTheta) * 0.1;
    //p *= ( Math.random() -.5);
    vertices[bp + 4] = py;
  }
}*/

// -------------------------------

function timer() {
  //监听首页大图加载状态
  let bgiLoadState = setInterval(function () {
    let bgi = document.getElementById("bgi");//首页大图
    if(bgi.complete){//关闭动画
      drawType = 0;
      document.getElementById("c").style.opacity = "0";
      document.getElementById("c").style.zIndex = "-1";
      clearInterval(bgiLoadState);
    }
  },200);



}

loadScene();
