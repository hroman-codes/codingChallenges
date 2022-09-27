// https://www.codewars.com/kata/58649884a1659ed6cb000072/solutions/javascript

// 1️⃣ EXAMPLE: 
//                ✔        ✔     ✔ 
//  START   green > yellow > red > 🔃  END

//                🚫       🚫
//  START   green < yellow < red  END

// 2️⃣ APPROACH: finite state machine model

// Current State | Next State
// __________________________
// Green    | Yellow 
// Yellow   | Red 
// Red      | Green

// 3️⃣ IMPLEMENTATION
function updateLight(current) {

    if (current === '') return ("We have a problem")

    const trafficLightStateMachine = {
        currentState: 'red',
        state: {
            'green': { 
                _transition: function() {
                    trafficLightStateMachine.currentState = 'yellow'
                }
            },
            'yellow': {
                _transition: function() {
                    trafficLightStateMachine.currentState = 'red'
                }
            },
            'red': {
                _transition: function() {
                    trafficLightStateMachine.currentState = 'green'
                }
            }

        }
    }

    trafficLightStateMachine.state[current]._transition()

    return trafficLightStateMachine.currentState
}

// 4️⃣ TEST 
updateLight("green") // yellow
updateLight("yellow") // red
updateLight("red") // green
updateLight("") // we have a problem
