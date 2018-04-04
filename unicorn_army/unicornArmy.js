var containerFixed = document.createElement('div');
containerFixed.style.position = "fixed";
containerFixed.style.bottom = "0px";
containerFixed.style.width = "100%";
containerFixed.style.height = "100%";
containerFixed.style.zIndex = 99999;
containerFixed.style.pointerEvents = "none";
document.body.appendChild(containerFixed);

var containerAbsolute = document.createElement('div');
containerAbsolute.style.position = "absolute";
containerAbsolute.style.width = "100%";
containerAbsolute.style.height = "100%";
containerFixed.appendChild(containerAbsolute);

for (var i = 0; i < 50; i++) {
  var image = document.createElement('img');
  image.src = '/rainbow_dash.gif';
  image.classList.add = 'unicorn';
  image.style.position = "absolute";
  image.style.bottom = "0px";
  
  var size = (100 + 50 * Math.random());
  image.style.width = size + "px";
  var marginBottom = (containerFixed.clientHeight - size) * Math.random();
  image.style.marginBottom = marginBottom + "px";

  image.style.height = "auto";
  var speed = (7 + 5 * Math.random());
  image.style.animation = "riding " + speed + "s linear infinite, jumping " + (speed/5) + "s ease-in-out infinite alternate";
  containerAbsolute.appendChild(image);
}

var style = document.createElement('style');
style.innerText = "@keyframes riding { from { left: 100%; } to { left: -300px ; }  } @keyframes jumping { from { bottom: 0px } to { bottom: 30px ; }  }";
containerAbsolute.appendChild(style);
