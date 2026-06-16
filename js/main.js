// this is your custom Javascript file
  function showTip() {
    $("#tip_paragraph").text("Try to lift in a rep range of 5-8 reps and use 2 sets! It's optimal!")
  }
  function revertTip() {
    $("#tip_paragraph").text("I wonder what the tip's gonna be")
  }
  
  function swapImg() {
    $("#lift_log").attr("src", "images/Nutrition.png");
  }
  function revertImg() {
    $("#lift_log").attr("src", "images/LiftLog.png")
  }

  function animateFeastImg() {
    const startWidth = $("#feast").width();
    const startHeight = $("#feast").height();
    const startTop = $("#feast").position().top;
    const startLeft = $("#feast").position().left;

    $("#feast").css({
      position: "absolute",
      width: startWidth,
      height: startHeight,
      top: startTop,
      left: startLeft,
    });

    $("#feast").animate(
      {
        top:"500px",
      left: "200px",
    },
    1000,
  )
  }
//Code for sounds
  createjs.Sound.registerSound("sounds/ronnie_lightweight-baby.mp3", "lwb")

  function playLWBSound() {
    createjs.Sound.play("lwb");
  }
//End of code for sounds
//Code for ScrollMagic
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "a"})
    .on("enter", function() {
      $("#feast").css("opacity", "1");
    })
    .addTo(controller);
//End of code for ScrollMagic
$(function () {
  // add any custom Javascript code below this line
  $("button").mouseover(showTip);
  $("button").mouseout(revertTip);
  $("#lift_log").mouseover(swapImg);
  $("#lift_log").mouseout(revertImg);
  $("#meal_paragraph").click(animateFeastImg);
  $("#lwb_para").click(playLWBSound);
  // add any custom Javascript code above this line.
})
