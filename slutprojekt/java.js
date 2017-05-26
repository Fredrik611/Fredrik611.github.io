function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("storbox").style.marginLeft = "250px";
  document.getElementById("storLoggo").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("storbox").style.marginLeft = "0";
  document.getElementById("storLoggo").style.marginLeft = "0";
}

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  if ($(window).width() >= 1250) {
    $("header").css("background-color", 'rgba(198, 62, 15, ' + (1 - $(document).scrollTop() / 100) + ')');
    $("header").css("height", '' + Math.max(80, (200 - $(document).scrollTop() * 50)) + 'px');
    $("#menuBox").css("margin-top", '' + Math.max(10, (60 - $(document).scrollTop() * 100)) + 'px');
    $("#bild").css("height", '' + Math.max(75, (179 - $(document).scrollTop() * 100)) + 'px');
    $("#bild").css("width", '' + Math.max(150, (388 - $(document).scrollTop() * 100)) + 'px');
    $("#logo").css("margin-top", '' + Math.max(2, (10 - $(document).scrollTop() * 100)) + 'px');
  }

  if (scrollTop >= $("#video").offset().top) {
    $("#video").css("position", "fixed");
    $("#video").css("left", "0");
    $("#video").css("top", "0");
    $("#video").css("right", "0");
    $("#video").css("height", "100vh");
    $("body").css("overflow-y", "hidden");
  }

});

function Closevideo() {
  $("#video").css("height", "900px");
  $("#video").css("position", "relative");
  $("body").css("overflow", "visible");
  $(window).scrollTop(0);
  if (b) {
    $("#video").css("background-color", 'rgba(255,255,255,1)');
    $("#menuButton").css("color", 'rgba(0,0,0,1)');
    $("header").css("border-color", 'rgba(0,0,0,1)');
    b = false;
  }
}

var b = false;

function clickme() {
  if (!b) {
    $("#video").css("background-color", 'rgba(0,0,0,1)');
    $("#menuButton").css("color", 'rgba(255,255,255,1)');
    $("header").css("border-color", 'rgba(255,255,255,1)');
    b = true;
  } else {
    $("#video").css("background-color", 'rgba(255,255,255,1)');
    $("#menuButton").css("color", 'rgba(0,0,0,1)');
    $("header").css("border-color", 'rgba(0,0,0,1)');
    b = false;
  }
}
