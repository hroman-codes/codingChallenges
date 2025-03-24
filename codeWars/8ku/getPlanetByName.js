/**
 * @tutorial https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
 * @description - The function is not returning the correct values. Can you figure out why?
 * @function getPlanetName
 * @param {Number} id
 * @returns {String}
 */

function getPlanetName(id) {
    var name;
    switch(id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6: 
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
        default:
            console.log('Na')
    }

    console.log(name)
    return name;
}

getPlanetName(4)