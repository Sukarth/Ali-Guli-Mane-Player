var socket = io("https://v9djdb27-3000.euw.devtunnels.ms/");


// function createAddItemWindow() {

//   // Create a new window
//   addItemWindown = new BrowserWindow({
//       width: 300,
//       height: 200,
//       title: 'Add Item',

//       // The lines below solved the issue
//       webPreferences: {
//           nodeIntegration: true,
//           contextIsolation: false
//       }
// })}

// createAddItemWindow()

// const http = require(['http']);
// const sockets = require(['socket.io'])

window.circle_clicked_id = ""
window.circle_clicked_num = ""

window.hi = ''

var canRematch = false;

var slotsValues = {
  "1": "5",
  "2": "5",
  "3": "5",
  "4": "5",
  "5": "5",
  "6": "5",
  "7": "5",
  "8": "5",
  "9": "5",
  "10": "5",
  "11": "5",
  "12": "5",
  "13": "5",
  "14": "5",
}

let slots_chosen = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  13: null,
  14: null
}



let namme = prompt("Please enter your name")

while (namme === null || namme.length === 0) {
  namme = prompt("Please enter a name")
}

console.log("name: "+namme)

function someFunction(div) {
  console.log(div.children)
  circle_clicked_id = div.children[0].id
  if (circle_clicked_id.length == 8) {
    circle_clicked_num = circle_clicked_id.slice(-2)
  }

  else if (circle_clicked_id.length == 7) {
    circle_clicked_num = circle_clicked_id.slice(-1)
  }

  console.log(circle_clicked_id)
  console.log(circle_clicked_num)
  console.log(typeof circle_clicked_num)
  if (slotsValues[circle_clicked_num] != "0") {
    if (Number(circle_clicked_num) - 1 < 7){
      var sdsdsdkl = Number(circle_clicked_num) - 1 + 7
    }
    if (Number(circle_clicked_num) - 1 > 7){
      var sdsdsdkl = Number(circle_clicked_num) - 1 - 7
    }
    socket.emit("action", {
      // gridIndex: [Number(circle_clicked_num) - 1, sdsdsdkl],
      gridIndex: Number(circle_clicked_num) - 1,
    });
  }

  return circle_clicked_id
};



function waitForValue(variable, interval) {
  //   console.log("dsd")
  //   console.log(variable)
  //   while (variable.length == 0) {
  if (variable.length > 0) {

    hi = 'ok'
    return variable
  } else {
    setTimeout(function() {
      waitForValue(variable, interval);

    }, interval);
  }
}
// }

// Usage example




document.getElementById("header").innerHTML = "Welcome, " + namme + "!";

setTimeout(function() {

  document.getElementById("header").innerHTML = ""



}, 4000);

// console.log(circle_clicked_num)
// console.log(waitForValue(circle_clicked_num, 500))



function checkvalidmove() {
  if (circle_clicked_num > 7) {
    return false
  }
}




socket.on("connect", function() {
  socket.emit("addPlayer", {
    playerName: namme,
  });
});

const Statuses = {
  WAITING: "waiting",
  PLAYING: "playing",
  DRAW: "draw",
  WIN: "win",
};



function rematch() {
  if (canRematch) {
    socket.emit("rematch", null);
  }

}



var chosen_circle;




// function calculateBoard(slot, value) {
//   // var NewSlotsValues = slotsValues
//   // var NextSlot = key + NewSlotsValues[key] + 1
//   // while (NextSlot>14){
//   //   Nextslot = Nextslot-14
//   // }

//   // gems_earned = NewSlotsValues[NextSlot]
//   // NewSlotsValues[key] = 0
//   // while (gems_earned != 0) {

//   // }

//   var new_slots_values = {
//     "1": "5",
//     "2": "5",
//     "3": "5",
//     "4": "5",
//     "5": "5",
//     "6": "5",
//     "7": "5",
//     "8": "5",
//     "9": "5",
//     "10": "5",
//     "11": "5",
//     "12": "5",
//     "13": "5",
//     "14": "5"
//   };

//   // console.log('hi')

//   new_slots_values[slot] = "0";
//   // console.log(slot)
//   var pre_slot = parseInt(slot)
//   // console.log(pre_slot)
//   var slot_emptied = parseInt(slot) + parseInt(value) + 1
//   // console.log(slot_emptied)
//   for (const [slott, valued] of Object.entries(new_slots_values)) {

//     if (pre_slot < parseInt(slott) && parseInt(slott) < slot_emptied) {
//       // console.log('dddddddddddddddddddddddddddddddddddddd')
//       // console.log(slott)
//       // console.log(valued)
//       var thtg = parseInt(valued) + 1
//       new_slots_values[slott] = thtg.toString()
//       }

//     else {

//       // console.log('ggggggggg')
//       continue
//     }
//   }
//   // console.log('bi')
//   if (slot_emptied > 14) {
//     slot_emptied = slot_emptied - 14
//   }
//   // console.log('ai')
//   // slot_emptied = slot_emptied.toString()
//   var gems_earned = parseInt(slotsValues[slot_emptied.toString()])
//   // var slot_emptiedd = slot_emptied.toString()

//   new_slots_values[slot_emptied.toString()] = "0"

//   // console.log('ti')
//   while (gems_earned != 0){
//     pre_slot = slot_emptied
//     slot_emptied = slot_emptied + gems_earned + 1

//     // console.log('fi')
//     for (const [slobt, valuet] of Object.entries(new_slots_values)) {
//       // console.log('aaaa')
//       if (pre_slot < parseInt(slobt) && parseInt(slobt) < slot_emptied) {
//         var thttg = parseInt(valuet) + 1
//         // console.log(thttg)
//         // console.log(slobt)
//         // console.log(valuet)
//         // console.log(new_slots_values[slot])
//         // console.log(new_slots_values.slot)
//         // console.log("--------------")
//         new_slots_values[slobt] = thttg.toString()
//         // console.log(new_slots_values[slobt])
//       }

//     }

//     while (slot_emptied > 14) {
//       slot_emptied = slot_emptied - 14
//       // console.log('TTTTTi')
//     }

//     // console.log('DDDi')
//     // slot_emptied = slot_emptied.toString()
//     gems_earned = parseInt(new_slots_values[slot_emptied.toString()])
//     // above line???????????????????????????????????????????????????????????
//     // slot_emptied = slot_emptied.toString()
//     new_slots_values[slot_emptied.toString()] = "0"

//   }

//   if (gems_earned == 0) {

//     var slot_taken = slot_emptied + 1
//     if (slot_taken > 14){
//         slot_taken = slot_taken - 14
//     }
//     // slot_taken = slot_taken.toString()
//     gems_earned = new_slots_values[slot_taken.toString()]
//     return new_slots_values, gems_earned

//   }



// }



// function updateBoard(slots, gemsEarned) {
//   socket.emit("updateBoard", {
//     board: slots,
//     gemsEarned: gemsEarned,
//   });
// }



socket.on("gameState", function(state) {
  console.log(state.slotBoard)
  console.log(slotsValues)
  // slotsValues = state.slotBoard
  // for (let index = 0; index < state.board.length; index++) {
  //   const player = state.board[index];
  //   if (player != null) {
  //     slots_chosen[index+1] = player.symbol;
  //   } else {
  //     slots_chosen[index+1] = null;
  //   }
  // }
// var counter = 1
//   if (state.flippedPlayer.id == socket.id){
//     for( var sloot in state.slotBoard) {
//       counter = counter + 1
//       if (counter > 7){
        
//     }
//   }
//   console.log(slotsValues)

  console.log(state.players.length)
  
  if (state.players.length == 2) {
    if (state.flippedPlayer.id == socket.id){
      for (var key in state.slotBoard) {
        var numericKey = parseInt(key);
        if (numericKey < 7) {
          slotsValues[(numericKey + 7).toString()] = state.slotBoard[key];
        } else if (numericKey > 7) {
          slotsValues[(numericKey - 7).toString()] = state.slotBoard[key];
        } else {
          slotsValues[key] = state.slotBoard[key];
        }
      }
      console.log(slotsValues)
    }
  }


  // for (const key in slots_chosen) {
  //   if (slots_chosen[key] === "X") {
  //     updateBoard(calculateBoard(key, slots_chosen[key]))
  //   }
  // }


  document.getElementById("Gamestatus").innerHTML = "";
  switch (state.result.status) {
    case Statuses.WAITING:
      document.getElementById("Gamestatus").innerHTML = "Waiting for players....";
      break;
    case Statuses.PLAYING:
      document.getElementById("Gamestatus").innerHTML = state.currentPlayer.playerName + " to play";
      break;
    case Statuses.DRAW:
      document.getElementById("Gamestatus").innerHTML = "Draw!";
      document.getElementById("rematch").style.visibility = "visible"
      canRematch = true
      break;
    case Statuses.WIN:
      document.getElementById("Gamestatus").innerHTML = state.result.winner.playerName + " Wins!";
      document.getElementById("rematch").style.visibility = "visible"
      canRematch = true
      break;
    default:
      break;
  }

  document.getElementById("Player1").innerHTML = "";
  document.getElementById("Player2").innerHTML = "";
  if (state.players.length > 0) {
    document.getElementById("Player1").innerHTML = "Player 1: " + state.players[0].playerName;
  }

  if (state.players.length > 1) {
    document.getElementById("Player2").innerHTML = "Player 2: " + state.players[1].playerName;
  }
});





// socket.on("hello", (arg, callback) => {
//   console.log(arg); // "world"
//   callback("got it");
// });
















// while (hi != 'ok') {
//     setTimeout(function() {


//         console.log('dd')


//         }, 9000);

// }                                             