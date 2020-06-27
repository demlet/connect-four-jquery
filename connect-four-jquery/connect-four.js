var colorToMove = "red";
var winSequence = [];
var winner = false;

function checkForWin() {
  var columns = [["#x0y0", "#x0y1", "#x0y2", "#x0y3",  "#x0y4", "#x0y5"], ["#x1y0", "#x1y1", "#x1y2", "#x1y3",  "#x1y4", "#x1y5"], ["#x2y0", "#x2y1", "#x2y2", "#x2y3",  "#x2y4", "#x2y5"],
    ["#x3y0", "#x3y1", "#x3y2", "#x3y3",  "#x3y4", "#x3y5"], ["#x4y0", "#x4y1", "#x4y2", "#x4y3",  "#x4y4", "#x4y5"], ["#x5y0", "#x5y1", "#x5y2", "#x5y3",  "#x5y4", "#x5y5"],
    ["#x6y0", "#x6y1", "#x6y2", "#x6y3",  "#x6y4", "#x6y5"]];
  for(var i = 0; i < 7; i++) {
    for(var j = 0; j < 3; j++) {
      if($(columns[i][j]).css("fill") !== "rgb(255, 255, 255)" && $(columns[i][j]).css("fill") === $(columns[i][j+1]).css("fill")
      && $(columns[i][j]).css("fill") === $(columns[i][j+2]).css("fill") && $(columns[i][j]).css("fill") === $(columns[i][j+3]).css("fill")) {
        winSequence.push(columns[i][j], columns[i][j+1], columns[i][j+2], columns[i][j+3]);
        for(var k = 0; k < 4; k++) {
          $("." + winSequence[k].slice(1, 5)).html("<img src='face-with-monocle_1f9d0-" + colorToMove + ".png' alt='' width='85' height='85'>");
        }
        winner = true;
        return true;
      }
    }
  }
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 6; j++) {
      if($(columns[i][j]).css("fill") !== "rgb(255, 255, 255)" && $(columns[i][j]).css("fill") === $(columns[i+1][j]).css("fill")
      && $(columns[i][j]).css("fill") === $(columns[i+2][j]).css("fill") && $(columns[i][j]).css("fill") === $(columns[i+3][j]).css("fill")) {
        winSequence.push(columns[i][j], columns[i+1][j], columns[i+2][j], columns[i+3][j]);
        for(var k = 0; k < 4; k++) {
          $("." + winSequence[k].slice(1, 5)).html("<img src='face-with-monocle_1f9d0-" + colorToMove + ".png' alt='' width='85' height='85'>");
        }
        winner = true;
        return true;
      }
    }
  }
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 6; j++) {
      if($(columns[i][j]).css("fill") !== "rgb(255, 255, 255)" && $(columns[i][j]).css("fill") === $(columns[i+1][j+1]).css("fill")
      && $(columns[i][j]).css("fill") === $(columns[i+2][j+2]).css("fill") && $(columns[i][j]).css("fill") === $(columns[i+3][j+3]).css("fill")) {
        winSequence.push(columns[i][j], columns[i+1][j+1], columns[i+2][j+2], columns[i+3][j+3]);
        for(var k = 0; k < 4; k++) {
          $("." + winSequence[k].slice(1, 5)).html("<img src='face-with-monocle_1f9d0-" + colorToMove + ".png' alt='' width='85' height='85'>");
        }
        winner = true;
        return true;
      }
    }
  }
  for(var i = 3; i < 7; i++) {
    for(var j = 0; j < 6; j++) {
      if($(columns[i][j]).css("fill") !== "rgb(255, 255, 255)" && $(columns[i][j]).css("fill") === $(columns[i-1][j+1]).css("fill")
      && $(columns[i][j]).css("fill") === $(columns[i-2][j+2]).css("fill") && $(columns[i][j]).css("fill") === $(columns[i-3][j+3]).css("fill")) {
        winSequence.push(columns[i][j], columns[i-1][j+1], columns[i-2][j+2], columns[i-3][j+3]);
        for(var k = 0; k < 4; k++) {
          $("." + winSequence[k].slice(1, 5)).html("<img src='face-with-monocle_1f9d0-" + colorToMove + ".png' alt='' width='85' height='85'>");
        }
        winner = true;
        return true;
      }
    }
  }
  return false;
}

function makeAMove() {
  column = $(this).attr("class").slice(-1);
  var columns = [["#x0y0", "#x0y1", "#x0y2", "#x0y3",  "#x0y4", "#x0y5"], ["#x1y0", "#x1y1", "#x1y2", "#x1y3",  "#x1y4", "#x1y5"], ["#x2y0", "#x2y1", "#x2y2", "#x2y3",  "#x2y4", "#x2y5"],
    ["#x3y0", "#x3y1", "#x3y2", "#x3y3",  "#x3y4", "#x3y5"], ["#x4y0", "#x4y1", "#x4y2", "#x4y3",  "#x4y4", "#x4y5"], ["#x5y0", "#x5y1", "#x5y2", "#x5y3",  "#x5y4", "#x5y5"],
    ["#x6y0", "#x6y1", "#x6y2", "#x6y3",  "#x6y4", "#x6y5"]];
  for(var i = 0; i < 6; i++){
    if($(columns[column][i]).css("fill") === "rgb(255, 255, 255)" && winner === false) {
      $(columns[column][i]).css("fill", colorToMove);
      if(checkForWin()) {
        $("h1").css("color", colorToMove);
        $("h1").css("font-size", "75pt");
        $("h1").text(colorToMove.toUpperCase() + " WINS!!!!!");
      }
      if (colorToMove === "red") {
        colorToMove = "yellow";
      }
      else if (colorToMove === "yellow") {
        colorToMove = "red";
      }
      $(".four").css("color", colorToMove);
      break;
      }
    }
  }

function reloadPage() {
  if(confirm("Really start over!?!?")) {
    location.reload();
  }
}

function newGame() {
  if(confirm("Play again some more!?!?")) {
    location.reload();
  }
}

$(".column0").click(makeAMove);
$(".column1").click(makeAMove);
$(".column2").click(makeAMove);
$(".column3").click(makeAMove);
$(".column4").click(makeAMove);
$(".column5").click(makeAMove);
$(".column6").click(makeAMove);
$(".name-of-game").click(reloadPage);
$(".instructions").click(reloadPage);
