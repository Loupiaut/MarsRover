// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: null
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  let face;
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      face ="West";
      break;
    case "W":
      rover.direction = "S";
      face = "South";
      break;
    case "S":
      rover.direction = "E";
      face = "East";
      break;
    case "E":
      rover.direction = "N";
      face = "North";
      break;
  }
  console.log("The rover now faces", face);
}

function turnRight(rover){
  console.log("turnRight was called!");
  let face;
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      face = "East";
      break;
    case "W":
      rover.direction = "N";
      face = "North";
      break;
    case "S":
      rover.direction = "W";
      face = "West";
      break;
    case "E":
      rover.direction = "S";
      face = "South";
      break;
  }
  console.log("The rover now faces", face);
}

function moveForward(rover){
  console.log("moveForward was called");
  rover.travelLog += [rover.x,rover.y];
  switch (rover.direction) {
    case "N":
        if (rover.y > 0) {
        rover.y -= 1;
      }
        break;
      case "W":
        if (rover.x > 0) {
        rover.x -= 1;
      }
        break;
      case "S":
        if (rover.y < 10) { 
        rover.y += 1;
      }
        break;
      case "E":
        if (rover.x < 10) {
        rover.x += 1;
      }
        break;
  }
  console.log("The rover sits at :", rover.x, rover.y, "facing", rover.direction);
}

function moveBackwards(rover) {
  console.log("moveBackwards was called");
  rover.travelLog += [rover.x,rover.y];
  switch (rover.direction) {
    case "N":
      if (rover.y < 10) { 
        rover.y += 1;
      }
        break;
      case "W":
        if (rover.x < 10) {
        rover.x += 1;
      }
        break;
      case "S":
        if (rover.y > 0) {
        rover.y -= 1;
      }
        break;
      case "E":
        if (rover.x > 0) {
        rover.x -= 1;
      }
        break;
  }
  console.log("The rover sits at :", rover.x, rover.y, "facing", rover.direction);
}

function commands() {
  commandSequence = prompt("Allowed commands are r/R(turn right), l/L(turn left), f/F(move forward) and b/B(move backwards");
  for (let i = 0; i < commandSequence.length; i++) {
    if (commandSequence[i] === "f" || commandSequence[i] === "F") {
      moveForward(rover);
    }
    else if (commandSequence[i] === "r" || commandSequence[i] === "R") {
      turnRight(rover);
    }
    else if (commandSequence[i] === "l" || commandSequence[i] === "L") {
      turnLeft(rover);
    }
    else if (commandSequence[i] === "b" || commandSequence[i] === "B") {
      moveBackwards(rover);
    }
    else {
      continue;
    }
  }
  console.log("Travel log : ",rover.travelLog);
}