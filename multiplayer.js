var socket = io("https://alu-guli-mane-game-server.onrender.com/");
// var socket = io("https://bcz88mvk-10000.euw.devtunnels.ms/");

// var playerIsFlipped;
var chosen_circlee;
var statee;
// window.addEventListener("resize", fontfitter);
document.addEventListener('pointerdown', function(event) {
  if (statee.result.status == Statuses.WAITING) {
    console.log("Waiting")
    event.preventDefault();
  }
});





// // // // function fitFont(){
// // // //   var child1 = document.getElementById('Player1').children[0];
// // // //   var child2 = document.getElementById('Player2').children[0];
// // // //   var child3 = document.getElementById('Gamestatus').children[0];
// // // //   var elem1 = document.getElementById('Player1');
// // // //   var elem2 = document.getElementById('Player2');
// // // //   var elem3 = document.getElementById('Gamestatus');
// // // //   var getFontSize = 0;

  // // // // textFit(child1)
  // // // // textFit(child2)
  // // // // textFit(child3)
  // // // // window.fitText(child1)
  // // // // window.fitText(child2)
  // // // // window.fitText(child3)

  // // // child1.style.visibility = 'hidden';
  // // // child2.style.visibility = 'hidden';
  // // // child3.style.visibility = 'hidden';


  // // // var counter=0
  // // // // var child=elem;
  // // // elem = document.getElementById('condftainer');
  // // // var getFontSize1 = parseFloat(window.getComputedStyle(child1).getPropertyValue('font-size'));
  // // // var getFontSize2 = parseFloat(window.getComputedStyle(child2).getPropertyValue('font-size'));
  // // // var getFontSize3 = parseFloat(window.getComputedStyle(child3).getPropertyValue('font-size'));
  // // // // console.log(child.offsetHeight)
  // // // // console.log(getFontSize)
  // // // // console.log(elem.clientHeight)  
  // // // while(child1.offsetHeight+child2.offsetHeight+child3.offsetHeight>elem.offsetHeight && counter<10){
  // // //   if (child1.clientHeight==18.8) {
      
  // // //   }
    
  // // //   console.log('0');
  // // //   counter = counter + 1
  // // //   getFontSize1 -= 1;
  // // //   getFontSize2 -= 1;
  // // //   getFontSize3 -= 1;
  // // //   child1.style.fontSize = getFontSize1 + 'px';
  // // //   child2.style.fontSize = getFontSize2 + 'px';
  // // //   child3.style.fontSize = getFontSize3 + 'px';
    
  // // // }


  // // // while(child1.offsetHeight+child2.offsetHeight+child3.offsetHeight<elem.offsetHeight && counter<10){
  // // //   console.log('0');
  // // //   counter = counter + 1
  // // //   getFontSize1 += 1;
  // // //   getFontSize2 += 1;
  // // //   getFontSize3 += 1;
  // // //   child1.style.fontSize = getFontSize1 + 'px';
  // // //   child2.style.fontSize = getFontSize2 + 'px';
  // // //   child3.style.fontSize = getFontSize3 + 'px';
  // // // }

  // // // while(child1.offsetWidth>elem.offsetWidth  && counter<10){
  // // //   console.log('0');
  // // //   counter = counter + 1
  // // //   getFontSize1 -= 1;

  // // //   child1.style.fontSize = getFontSize1 + 'px';

  // // // }

  // // // while(child2.offsetWidth>elem.offsetWidth && counter<10){
  // // //   console.log('0');
  // // //   counter = counter + 1

  // // //   getFontSize2 -= 1;

  // // //   child2.style.fontSize = getFontSize2 + 'px';

  // // // }

  // // // while(child3.offsetWidth>elem.offsetWidth && counter<10){
  // // //   console.log('0');
  // // //   counter = counter + 1

  // // //   getFontSize3 -= 1;

  // // //   child3.style.fontSize = getFontSize3 + 'px';
  // // // }


// // // //   console.log(child1+child2+child3)

// // // //   while(child1.clientWidth > elem1.clientWidth){
// // // //     console.log('111');
// // // //     if (child1.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child1).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child1.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize -= 1;
// // // //     child1.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child1.clientWidth < elem1.clientWidth ){
// // // //     console.log('110');
// // // //     if (child1.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child1).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child1.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize += 1;
// // // //     child1.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child1.clientHeight > elem1.clientHeight){
// // // //     console.log('211');
// // // //     if (child1.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child1).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child1.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize -= 1;
// // // //     child1.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child1.clientHeight  < elem1.clientHeight){
// // // //     console.log('210');
// // // //     if (child1.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child1).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child1.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize += 1;
// // // //     child1.style.fontSize = getFontSize + 'px';
// // // //   }


// // // //   while(child2.clientWidth > elem2.clientWidth){
// // // //     console.log('21');
// // // //     if (child2.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child2).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child2.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize -= 1;
// // // //     child2.style.fontSize = getFontSize + 'px';
// // // //   }


// // // //   while(child2.clientWidth < elem2.clientWidth){
// // // //     console.log('20');
// // // //     if (child2.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child2).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child2.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize += 1;
// // // //     child2.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child2.clientHeight  > elem2.clientHeight){
// // // //     console.log('21');
// // // //     if (child2.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child2).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child2.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize -= 1;
// // // //     child2.style.fontSize = getFontSize + 'px';
// // // //   }


// // // //   while(child2.clientHeight  < elem2.clientHeight){
// // // //     console.log('20');
// // // //     if (child2.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child2).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child2.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize += 1;
// // // //     child2.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child3.clientWidth > elem3.clientWidth){
// // // //     console.log('31');
// // // //     if (child3.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child3).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child3.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize -= 1;
// // // //     child3.style.fontSize = getFontSize + 'px';
// // // //   }


// // // //   while(child3.clientWidth < elem3.clientWidth){
// // // //     console.log('30');
// // // //     if (child3.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child3).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child3.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize += 1;
// // // //     child3.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child3.clientHeight  > elem3.clientHeight){
// // // //     console.log('31');
// // // //     if (child3.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child3).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child3.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize -= 1;
// // // //     child3.style.fontSize = getFontSize + 'px';
// // // //   }

// // // //   while(child3.clientHeight < elem3.clientHeight){
// // // //     console.log('30');
// // // //     if (child3.style.fontSize == ""){
// // // //       getFontSize = getComputedStyle(child3).fontSize;
// // // //     }
// // // //     else {
// // // //       getFontSize = child3.style.fontSize
// // // //     }
// // // //     getFontSize = Number(getFontSize.replace('px',''))
// // // //     getFontSize += 1;
// // // //     child3.style.fontSize = getFontSize + 'px';
// // // //   }



// // // //   // child1.style.visibility = 'visible';
// // // //   // child2.style.visibility = 'visible';
// // // //   // child3.style.visibility = 'visible';
// // // //   return
// // // // }


// // // // function fontfitter() {
// // // //   console.log('fontfitter');
// // // //   fitFont(document.getElementById('Player1'));
// // // //   fitFont(document.getElementById('Player2'));
// // // //   fitFont(document.getElementById('Gamestatus'));
// // // //   return
// // // // }

// document.addEventListener('DOMContentLoaded', function() {
//   var object = document.getElementById('Gamestatus');
//   var overlay = document.getElementById('back_board');

//   var objectPosition = object.getBoundingClientRect().top;
//   var overlayPosition = overlay.getBoundingClientRect().top;

//   if (objectPosition < overlayPosition) {
//       object.style.width = '100px';
//       object.style.height = '100px';
//       object.style.top = '30px';
//       object.style.left = '30px';
//   }
// });

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

  chosen_circlee = circle_clicked_num





  if (slotsValues[chosen_circlee] != "0") {
    // if (Number(circle_clicked_num) - 1 < 7){
    //   var sdsdsdkl = Number(circle_clicked_num) - 1 + 7
    // }
    // if (Number(circle_clicked_num) - 1 > 7){
    //   var sdsdsdkl = Number(circle_clicked_num) - 1 - 7
    // }

    // if (playerIsFlipped == true) {
    //   if (Number(circle_clicked_num) >= 1 && Number(circle_clicked_num) <= 7) {
    //     chosen_circlee = Number(circle_clicked_num) +7
    //   }
    //   else if (Number(circle_clicked_num) >= 7 && Number(circle_clicked_num) <= 14) {
    //     chosen_circlee = Number(circle_clicked_num) -7
    //   }
    //   console.log(chosen_circlee)
    //   console.log("chosen_circlee")
    // }
    // else {
      chosen_circlee = circle_clicked_num
      console.log(chosen_circlee)
    // }

    socket.emit("action", {
      // gridIndex: [Number(circle_clicked_num) - 1, sdsdsdkl],
      gridIndex: chosen_circlee.toString(),
    });
  }

  return chosen_circlee 
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
  console.log("diiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
  console.log(state)
  console.log(state.slotBoard)
  console.log(slotsValues)
  statee = state
  // try {
    // if (state.flippedPlayer.id == socket.id) {
    //   playerIsFlipped = true
    // }
  // } catch (error) {
  //   hi = 0
  // }

  try {

    if (state.flippedPlayer.id == socket.id) {
      var elements = document.getElementsByClassName("d");
      for (var i = 0; i < elements.length; i++) {
        // elements[i].parentElement.style.background = "brown";
        elements[i].addEventListener("click", function() {
      console.log("KKR")
          someFunction(this);
        });
      }


      // var elements = document.getElementsByClassName("dd");
      // for (var i = 0; i < elements.length; i++) {
      //   elements[i].parentElement.style.background = "bisque";
      // }

    } else {
      var elements = document.getElementsByClassName("dd");
      for (var i = 0; i < elements.length; i++) {
        // elements[i].parentElement.style.background = "bisque";
        elements[i].addEventListener("click", function() {
          console.log("OP")
          someFunction(this);
        });
      }

      // var elements = document.getElementsByClassName("d");
      // for (var i = 0; i < elements.length; i++) {
      //   elements[i].parentElement.style.background = "brown";
      // }

    }

  } catch (e) {}  



  for (var key in state.slotBoard) {
    slotsValues[key] = state.slotBoard[key];
  }

  
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
    // if (state.flippedPlayer.id == socket.id && state.currentPlayer == socket.id){
    //   for (var key in state.slotBoard) {
    //     var numericKey = parseInt(key);
    //     if (numericKey == 7) {
    //       slotsValues[(numericKey + 7).toString()] = state.slotBoard[key];
    //     }
    //     else if (numericKey == 14) {
    //       slotsValues[(numericKey - 7).toString()] = state.slotBoard[key];
    //     }
    //     else if (numericKey < 7) {
    //       slotsValues[(numericKey + 7).toString()] = state.slotBoard[key];
    //     } else if (numericKey > 7) {
    //       slotsValues[(numericKey - 7).toString()] = state.slotBoard[key];
    //     }
    //     // else {
    //     //   slotsValues[key] = state.slotBoard[key];
    //     // }
    //   }
    //   console.log(slotsValues)
    //   let sum = Object.values(slotsValues).reduce((acc, val) => acc + parseInt(val), 0);

    //   console.log("Sum of values:", sum);
    // }
    // else if (state.flippedPlayer.id != socket.id && state.currentPlayer != socket.id) {
    //   for (var key in state.slotBoard) {
    //     var numericKey = parseInt(key);
    //     if (numericKey == 7) {
    //       slotsValues[(numericKey + 7).toString()] = state.slotBoard[key];
    //     }
    //     else if (numericKey == 14) {
    //       slotsValues[(numericKey - 7).toString()] = state.slotBoard[key];
    //     }
    //     else if (numericKey < 7) {
    //       slotsValues[(numericKey + 7).toString()] = state.slotBoard[key];
    //     } else if (numericKey > 7) {
    //       slotsValues[(numericKey - 7).toString()] = state.slotBoard[key];
    //     }
    //     // else {
    //     //   slotsValues[key] = state.slotBoard[key];
    //     // }
    //   }
    //   console.log(slotsValues)
    //   let sum = Object.values(slotsValues).reduce((acc, val) => acc + parseInt(val), 0);

    //   console.log("Sum of values:", sum);
    // }

    // else if (state.flippedPlayer.id == socket.id && state.currentPlayer != socket.id){
      for (var key in state.slotBoard) {
        slotsValues[key] = state.slotBoard[key];
      }
      console.log(slotsValues)
      let sum = Object.values(slotsValues).reduce((acc, val) => acc + parseInt(val), 0);

      console.log("Sum of values:", sum);
    // }
  }


  // for (const key in slots_chosen) {
  //   if (slots_chosen[key] === "X") {
  //     updateBoard(calculateBoard(key, slots_chosen[key]))
  //   }
  // }


  // document.getElementById("Gamestatus").children[0].innerHTML = " ";
  switch (state.result.status) {
    case Statuses.WAITING:
      // document.getElementById("Gamestatus").children[0].innerHTML = "Waiting for players....";
      document.getElementById("gameStatus").style.visibility = "visible";
      document.getElementById("gameStatus").classList.remove('fade-out');
      document.getElementById("gameStatus").classList.add('fade-in');
      document.getElementById("condftainer").classList.remove('box');
      document.getElementById("condftainer2").classList.remove('box');

      break;
    case Statuses.PLAYING:
      // if (state.currentPlayer.id == state.flippedPlayer.id) {
      //   document.querySelector('#condftainer').style.boxShadow = 'none';
      //   document.querySelector('#condftainer2').style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, 0.5)';        
      // }
      // else if (state.currentPlayer.id != state.flippedPlayer.id) {        
      //   document.querySelector('#condftainer2').style.boxShadow = 'none';
      //   document.querySelector('#condftainer').style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, 0.5)';
      // }

      if (state.currentPlayer.id == state.flippedPlayer.id) {        
        document.getElementById("condftainer").classList.remove('box');
        document.getElementById("condftainer2").classList.add('box');       
      }
      else if (state.currentPlayer.id != state.flippedPlayer.id) {        
        document.getElementById("condftainer2").classList.remove('box');
        document.getElementById("condftainer").classList.add('box');  
      }



      
      // document.getElementById("Gamestatus").children[0].innerHTML = state.currentPlayer.playerName + " to play";
      // document.getElementById("gameStatus").style.visibility = "hidden";
      document.getElementById("gameStatus").classList.remove('fade-in');
      document.getElementById("gameStatus").classList.add('fade-out');
      break;
//TODO: change gamestate to show on the grey background screen and also say that the game ended ------------------------------

    case Statuses.DRAW:
      // document.getElementById("Gamestatus").children[0].innerHTML = "Draw!";
      document.getElementById("rematch").style.visibility = "visible"
      canRematch = true
      break;
    case Statuses.WIN:
      // document.getElementById("Gamestatus").children[0].innerHTML = state.result.winner.playerName + " Wins!";
      document.getElementById("rematch").style.visibility = "visible"
      canRematch = true
      break;
    default:
      break;

 //TODO ----------------------------------------------------------------------------------------------------------------------
  }

  document.getElementById("Player1").children[0].innerHTML = " ";
  document.getElementById("Player2").children[0].innerHTML = " ";
  document.getElementById("Player1Gems").children[0].innerHTML = " ";
  document.getElementById("Player2Gems").children[0].innerHTML = " ";
  if (state.players.length == 1) {
    document.getElementById("Player1").children[0].innerHTML = "Player 1: " + state.players[0].playerName;
    document.getElementById("Player1Gems").children[0].innerHTML = 'Player 1 Gems: ' + state.players[0].numberOfGems;
    // document.getElementById("Player2").children[0].innerHTML = " ";
  }

  if (state.players.length == 2) {
    document.getElementById("Player1").children[0].innerHTML = "Player 1: " + state.players[0].playerName;
    document.getElementById("Player1Gems").children[0].innerHTML = 'Player 1 Gems: ' + state.players[0].numberOfGems;
    document.getElementById("Player2").children[0].innerHTML = "Player 2: " + state.players[1].playerName;
    document.getElementById("Player2Gems").children[0].innerHTML = 'Player 2 Gems: ' + state.players[1].numberOfGems;
  }

  // if (state.result.status == Statuses.WAITING) {
  //   document.getElementById("Player2").children[1].innerHTML = " ";
  // }




  for (const thingies in slotsValues) {
    console.log(slotsValues[thingies])
    var parent = document.getElementById("divCircle"+thingies);
    parent.replaceChildren()
    for (var i = 0; i < Number(slotsValues[thingies]); i++) {
      var div = document.createElement("span");
      // div.style.width = "15px";
      // div.style.height = "15px";
      div.style.backgroundColor = "red";
      div.style.borderRadius = "50%";
      // div.style.display = "inline-block";
      div.className = "rtryd";
      
      parent.appendChild(div);
      // document.getElementById("circle"+thingies).appendChild(div);
    }
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