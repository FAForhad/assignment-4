/* -----------------
problem -------- 1 
-------------------*/

function radianToDegree(radian) {
    if (typeof (radian) !== "number") {
        return "Please provide a number";
    }
    else {
        let convert = radian * 180 / 3.1416;
        let fixedPoint = convert.toFixed(2);
        let degree = parseFloat(fixedPoint);
        return degree;
    }
}
console.log(radianToDegree(10))


/* -----------------
problem -------- 2 
-------------------*/

function isJavaScriptFile(String) {
    if (typeof (String) !== "string") {
        return "Please use valid input"
    }
    else {
        /* js condition */
        if (String.endsWith('.js') ) {
            return true;
        }
        return false; 
    }
}
console.log( isJavaScriptFile('condition.js'));


/* -----------------
problem -------- 3
-------------------*/

function oilPrice(parameterDiesel, parameterPatrol, parameterOctane) {
    if (typeof (parameterDiesel) !== "number" || typeof (parameterPatrol) !== "number" ||typeof (parameterOctane) !== "number" ){
        return "please use number as input"
    }
    else {
        const diesel = 114;
        const patrol = 130;
        const octane = 135;
        
        let dieselPrice = parameterDiesel * diesel;
        let patrolPrice = parameterPatrol * patrol;
        let octanePrice = parameterOctane * octane;
          /* addition of total oil*/
        let totalPrice = dieselPrice + patrolPrice + octanePrice;

        return totalPrice;
    }
}
console.log(oilPrice(1, 0, 2));

/* -----------------
problem -------- 4
-------------------*/

function publicBusFare(people) {
    if (typeof(people) != "number") {
        return "!!!!!!!  Please provide a number  !!!!!!"
    }
    else {
        const capacityBus = people % 50;
        const capacityMicro = capacityBus % 11;
    
        const publicBusFee = 250;
        
        const totalPublicBusFee = publicBusFee * capacityMicro;
        return totalPublicBusFee;   
    }
}
console.log(publicBusFare(365));


/* -----------------  
problem -------- 5
-------------------*/
let object1 = { name: "abul", friend: "kabul" }
let object2 = { name: "kabul", friend: "abul" }
function isBestFriend(friend1, friend2) {
    if (typeof (friend1) !== "object" || typeof (friend2) !== "object") {
        return "!!!!!!!  Please provide an object  !!!!!!"
    }
    else {
        if (friend1.name == friend2.friend && friend2.name == friend1.friend) {
            return true;
        }
            return false;
    }
}
console.log(isBestFriend(object1, object2))
