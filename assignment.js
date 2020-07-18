//Assignment 1: Feet to Mile Converter 

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(56088);
console.log(result);


//Assignment 2: Wood Calculator
// 1 chair = 1 cubic feet; 1 table = 3 cubic feet; 1 bed = 5 cubic feet;

function woodCalculator(chair, table, bed){
    var countChair = chair * 1;
    var countTable = table * 3;
    var countBed = bed * 5; 
    var totalWood = countChair + countTable + countBed; 
    return totalWood;
}

var total = woodCalculator(5, 23, 5);
console.log("Total number of wood need: " + total + "cft");

// Assignment 3: Brick calculator 
// 1st - 10th floor height is 15 ft ; 11th to 20th floor height is 12 ft and 21st to above floor height is 10ft
// per ft needs 1000 bricks.

function brickCalculator(floor){
    var countBrick = 0;
    if (floor <=10){
         countBrick = floor * 15 * 1000;
        
    }
    else if( floor <=20){
        var firstPart = 10 * 15 * 1000;
        var remaining = floor - 10;
        var secondPart = remaining * 12;
        countBrick = firstPart + secondPart;

    }
    else {
        var firstPart = 10 * 15 * 1000;
        var secondPart = 10 * 12 * 1000;
        var remaining = floor - 20;
        var thirdPart = remaining * 10;
        countBrick = firstPart + secondPart + thirdPart;
    }
  return countBrick;
}

var count = brickCalculator(34);
console.log("Total number of brick need: ", count, " pcs")


//Assignment 4: tinyFriend

function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = "";

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }

    return shortest;
}
  
var output = tinyFriend(['Aslam', 'Don', 'Sharif', 'Sabrina', 'Tomal', 'Bonni']);
console.log(output);
