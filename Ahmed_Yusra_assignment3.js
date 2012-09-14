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

//Main Code
procedure("ate", "already prayed")
console.log("I will eat " + samosa.amountForMe(15, 8) + " samosas." )