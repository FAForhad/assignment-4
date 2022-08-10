/* -----------------
problem -------- 1 
-------------------*/

function radianToDegree(radian) {
    let convert = radian * 180 / 3.1416;
    let fixedPoint = convert.toFixed(2);
    let degree = parseFloat(fixedPoint);
    return degree;
}
let converted = radianToDegree(10);
console.log(converted)


/* -----------------
problem -------- 2 
-------------------*/

function isJavaScriptFile(String) {
    if (String.endsWith('js') ) {
        return true;
    }
    return false;
}
let fileNamejs = isJavaScriptFile('innj.js');
console.log(fileNamejs);


/* -----------------
problem -------- 3
-------------------*/

function oilPrice(parameterDiesel, parameterPatrol, parameterOctane) {
    const diesel = 114;
    const patrol = 130;
    const octane = 135;
    let dieselPrice = parameterDiesel * diesel;
    let patrolPrice = parameterPatrol * patrol;
    let octanePrice = parameterOctane * octane;
    let totalPrice = dieselPrice + patrolPrice + octanePrice;
    return totalPrice;
}
const total = oilPrice(0, 2, 3);
console.log(total);

/* -----------------
problem -------- 4
-------------------*/

function publicBusFare(people) {
    const capacityBus = people % 50;
    const capacityMicro = capacityBus % 11;
    const publicBusFee = 250;
    const totalPublicBusFee = publicBusFee * capacityMicro;
    return totalPublicBusFee;
}
totalPublicBusFee = publicBusFare(365);
console.log(totalPublicBusFee);


/* -----------------
problem -------- 5
-------------------*/
let friends1 = { name: "abul", friend: "kabul" }
let friends2 = { name: "kabul", friend: "abul" }
function isBestFriend(object1, object2) {
    if (object1.name == object2.friend && object2.name == object1.friend) {
        return true;
    }
        return false;
}
let bestFriend = isBestFriend(friends1, friends2)
console.log(bestFriend)

