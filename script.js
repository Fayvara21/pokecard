const div = document.getElementById('card')

var x, y, rect;

div.addEventListener('mousemove', function(event) {
  rect = div.getBoundingClientRect();
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;
  console.log(`Mouse position: (${x}, ${y})`);
});
