// 1️⃣ EXAMPLE: 
//                ✔        ✔     ✔ 
//  START   green > yellow > red > 🔃  END

//                🚫       🚫
//  START   green < yellow < red  END

// 2️⃣ APPROACH:  finite state machine model

// Current State | Next State
// __________________________
// Green    | Yellow 
// Yellow   | Red 
// Red      | Green

// Represent the state machine in an obejct 
// trafficLightStateMachine = {
//     'green': 'yellow',
//     'yellow': 'red',
//     'red': 'green' 
// }

// 3️⃣ IMPLEMENTATION
function updateLight(current) {
    trafficLightStateMachine = {
        'green': 'yellow',
        'yellow': 'red',
        'red': 'green' 
    }

    if (current === '') console.log("We have a problem")

    return trafficLightStateMachine[current]
}

// 4️⃣ TEST 
updateLight("green") // yellow
updateLight("yellow") // red
updateLight("red") // green
updateLight("") // we have a problem
