// Yusra Ahmed
// SDI 1209
// Project 2
// Functions and Loops

// Declare Variables

var samosa = "chunky potatoes.",
    howMany = 15,
    prayers = ["Dawn", "Midday", "Afternoon", "Dusk", "Evening"]
;

// Procedure

var procedure = function() {var eat = true,
    prayed = true
;
    if (eat === true){
        console.log("I ate already.")
        if (prayed === true){
            console.log("I prayed already. I can go back to sleep now.")
        }else {
            console.log("I have to pray " + prayers[0] + "prayer before I can go back to sleep.")
        }
    }else{
        console.log("I have to eat in order to be ready for my big day.")
        console.log("Then I have to pray " + prayers[0] + "prayer before going back to sleep")
    };
};

// Boolean Function

var booleanFunction = function() {
    var reciteQuran = true,
        assignments = true
    ;
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

// Number Function

var eatSamosas = function() {
    var amount = howMany - 7;
    
    console.log("There are " + howMany + " samosas, I'll eat one.")
    
    while (howMany > amount) {
        howMany--
        
        if (howMany > amount){
            console.log(howMany + " samosas left, I'll stuff myself with one more.")
        }else{
            console.log("I'll leave " + howMany + " for everyone else.")
        };
    };
    return howMany
};

// String Function

var quote = function(){
    
    var first = "I'm going to make samosas with ",
        next = " These taste delicious."
    ;
    var say = first + samosa + next;
    return say
};

// Array Function

var pray = function() {
    var j = prayers.length;
    for(var i=0; i<j; i++) {
        console.log("I have to pray " + prayers[i] + " prayer, before I continue doing anything else.")
        
        if (i<4) {
            console.log("I've only prayed " + i + " prayers so far, I'm not done with today's prayers.")
        }else{
            console.log("The last prayer was the " + prayers[4] + " prayer, and I'm happy that I've done what God has asked me to do.")
        };
    };
    return i
};

// Main Code - Function Calls

console.log(procedure())
console.log("The fact that I've finished my assignments is " + booleanFunction() + ".")
console.log("What will I make today? " + quote())
console.log("I've ate enough today, there are " + eatSamosas() + " left.")
console.log("Number of prayers: " + pray())