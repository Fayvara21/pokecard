const card = document.getElementById('card')
const container = document.getElementById("container")
const specular = document.getElementById("specular")
let x, y,mousex, mousey, ang, rect;
let tiltforce = 6;

container.addEventListener('mousemove', function(event){ tiltCard(event) });
container.addEventListener('touchmove', function(event){ tiltCard(event) });
container.addEventListener('mouseout', function(event){ tiltCard(event) });
container.addEventListener('touchend', function(event){ tiltCard(event) });

function tiltCard(e) {

  rect = container.getBoundingClientRect();

  if(e.type == 'touchmove'){
    const { touches, changedTouches } = e.originalEvent ?? e;
    const touch = touches[0] ?? changedTouches[0];

    x = Math.max(Math.min( touch.pageX - rect.left, rect.width), 0 ) ;
    y = Math.max(Math.min( touch.pageY - rect.top, rect.height), 0 );

    //console.log(`angle: ${ang}, ${mousex}, ${mousey}, ${rect.width}, ${rect.height}`);

    tiltTransform()

  } else if (e.type == 'mousemove') {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    tiltTransform()
  }
  else{
    card.style.transform = `rotate3d(0,0,0,0deg ) translate3d(0, 0, 0px) scale(1)`; 
    specular.style.backgroundPosition= ` 0px 0px`

  }

}

function tiltTransform(){
  mousex = x - (rect.width/2);
  mousey = y - (rect.height/2);
  ang = Math.sqrt( Math.pow(-mousex, 2) + Math.pow(-mousey, 2))/tiltforce ;
  bgposy = rect.height/2 ;
  bgposx = rect.width/2;
  card.style.transform = ` perspective(1000px) rotate3d(${-mousey},${mousex},0, ${ang}deg ) translate3d(0, 0, 20px) scale(1.1)`; 
  specular.style.backgroundPosition= ` ${mousey-bgposy}px ${mousex-bgposx}px`
}
