var a = 0;
function makeGrid(j) {
  for (i=0; i<j; i++) {
    $("#container").css({"height": "500px", "width": "500px", "border": "solid 4px black"})
    $("#container").append($("<div/>", {class: 'columns'}));
    $(".columns").css({"display": "inline-block"});
  }
  for (i=0; i<j; i++) {
    $(".columns").append($("<div/>", {class: 'rows'}));
    $(".columns, .rows").css({"height": ""+500/j+"px", "width": ""+500/j+"px", "background-color": "grey"});
  }
}
function custom() {
  var m = prompt("How many squares per side?", "16");
  $("#container").empty();
  makeGrid(m);
}
function black() {
  $(".columns, .rows").mouseenter(function() {
    $(this).addClass("hover");
    $(".hover").css({"background-color": "black"});
  });
}
$(document).ready(function() {
  makeGrid(16);
  black();
  $("#clear").click(function() {
    custom();
    black();
  });
  $("#color").click(function() {
    custom();
    $(".columns, .rows").mouseenter(function() {
      $(this).css({"background-color": "rgb("+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+", "+Math.floor(Math.random() * 256)+")"});
    });
  });
  $("#grey").click(function() {
    custom();
    $(".columns, .rows").css({"background-color": "white"})
    $(".columns, .rows").mouseenter(function() {
      $(this).css({"background-color": "rgba(0, 0, 0, 1)"})
    });
  });
});
