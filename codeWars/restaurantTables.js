/**
 * @tutorial https://www.codewars.com/kata/598c1bc6a04cd3b8dd000012 - Restaurant Tables
 * 
 * Input:
    Input contains two integers A and B - 
        the number of one-seater and 
        the number of two-seater tables respectively, and 
        a list of integers - the number of people in each group of clients in chronological order of their arrival.

    Output:
    Return the total number of people the restaurant denies service to.

    Examples:
    (1, 2, [1, 2, 1, 1])  =>  0
        (1 * 1) + (2 * 2) = 5
        1 + 4 = 5 = totalAmountOfSeats
    (1, 1, [1, 1, 2, 1])  =>  2
        (1 * 1) + (1 * 2) = 
        1 + 2 = 3 = totalAmountOfSeats
    
    When to put two single guests at the same table:
        if there are no more open tables and a single table has 1 seat open
 */

function restaurant(a,b,t){
    // (1, 2, [1,2,1,1])
    const tables = { single: Array(a).fill(0), double: Array(b).fill(0) };
    // s: [1], d: [2, 0]
    let deninedGuests = 0;
    t.forEach(num => {
        if (num === 2) {
            const openSeatIndex = tables.double.indexOf(0);
            console.log('openSeatIndex', openSeatIndex)
            if (openSeatIndex !== -1) {
                tables.double[openSeatIndex] = 2;
            } else {
                deninedGuests += 2;
            }
        }
        if (num === 1) {
            const openSingleSeatIndex = tables.single.indexOf(0);
            const openDoubleSeatIndex = tables.double.indexOf(0);
            const singleUsedDoubleSeatIndex = tables.double.indexOf(1);
            if (openSingleSeatIndex !== -1) {
                tables.single[openSingleSeatIndex] = 1;
            } else if (openDoubleSeatIndex !== -1) {
                tables.double[openDoubleSeatIndex] = 1;
            } else if (singleUsedDoubleSeatIndex !== -1) {
                tables.double[singleUsedDoubleSeatIndex] += 1;
            } else {
                deninedGuests += 1;
            }
        }
    });
    return deninedGuests;
}

console.log(restaurant((1, 2, [1, 2, 1, 1])));