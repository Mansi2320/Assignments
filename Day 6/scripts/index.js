//let color = ['yellow' , 'blue' , 'red'];

let c = ["blue", "black", "yellow", "red"];
function changeColor() {
  for (var i = 0; i < c.length; i++) {
   (function(i) {
      setTimeout(function() {
          document.bgColor = c[i];
      }, 5000 * i);
  })(i);
}
}
changeColor();


