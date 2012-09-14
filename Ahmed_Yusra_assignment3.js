// Yusra Ahmed
// SDI 1209
// Project 3

//Declare Variables
var prayers = ["Dawn", "Midday", "Afternoon", "Dusk", "Evening"];

//Procedure

var procedure = function(eat, prayed) {
    console.log("I wake up at 3 am.")
    if (eat === "ate"){
        console.log("I ate already.")
        if (prayed === "already prayed"){
            console.log("I prayed already. I can go back to sleep now.")
        }else {
            console.log("I have to pray " + prayers[0] + " prayer before I can go back to sleep.")
        }
    }else{
        console.log("I have to eat in order to be ready for my big day.")
        console.log("Then I have to pray " + prayers[0] + " prayer before going back to sleep.")
    };
};

// Boolean Function

var booleanFunction = function(reciteQuran, assignments) {

    if (reciteQuran === true) {
        console.log("I've recited some Quran, now let's login to Fullsail.");
        if (assignments === true) {
            console.log("I've finished this week's assignments, now let's see what's for next week.");
        } else{
            console.log("I have to finish this week's assignments.");
        };
    }else{
        console.log("Let me recite some Quran before logging on to Fullsail.");
    };
    if (reciteQuran === true, assignments === true){
        return true
    }else{
        return false
    }
};

//Main Code
procedure("ate", "already prayed")
booleanFunction(true, true)
console.log("I will eat " + samosa.amountForMe(15, 8) + " samosas." )