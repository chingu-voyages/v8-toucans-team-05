$(document).ready(function(){
    $(".grandgrid").css("background-color", "black");
    /*    $(".grandgrid").css({"background-color": "black", "margin-top": "6vw", "margin-right": "2vw","margin-left": "2vw"});*/
    $(".grandgridtitle").html("<h2 style = 'color:white;'>Hover your pointer over your service of interest</h2>");
    }, function(){
    $(".grandgrid").css("background-color", "black");
    $(".grandgridtitle").html("<h2 style = 'color:white;'>Hover your pointer over your service of interest</h2>");
  });



$(document).ready(function(){
  $(".heart").hover(function(){
    $(".grandgrid").css({"background-color": "#9b0f15"});
    /*$(".grandgrid").css({"background-image": "url(https://image.freepik.com/free-vector/medical-background-design_1212-116.jpg)"});*/
    $(".grandgridtitle").html("<h2>Health</h2> <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>");
    }, function(){
    $(".grandgrid").css("background-color", "black");
    $(".grandgridtitle").html("<h2 style = 'color:white;'>Hover your pointer over your service of interest</h2>");
  });
});



$(document).ready(function(){
  $(".bank").hover(function(){
    $(".grandgrid").css("background-color", "#c9a76a");
    $(".grandgridtitle").html("<h2>Banking</h2><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>");
    }, function(){
    $(".grandgrid").css("background-color", "black");
    $(".grandgridtitle").html("<h2 style = 'color:white;'>Hover your pointer over your service of interest</h2>");
  });
});


$(document).ready(function(){
  $(".retail").hover(function(){
    $(".grandgrid").css("background-color", "#dda230");
    $(".grandgridtitle").html("<h2>Retail</h2><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>");
    }, function(){
    $(".grandgrid").css("background-color", "black");
    $(".grandgridtitle").html("<h2 style = 'color:white;'>Hover your pointer over your service of interest</h2>");
  });
});

$(document).ready(function(){
  $(".research").hover(function(){
    $(".grandgrid").css("background-color", "#e8ecd6");
    $(".grandgridtitle").html("<h2 style = 'color:black;'>Research</h2> <p style = 'color:black;'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>");
    }, function(){
    $(".grandgrid").css("background-color", "black");
    $(".grandgridtitle").html("<h2 style = 'color:white;'>Hover your pointer over your service of interest</h2>");
  });
});
