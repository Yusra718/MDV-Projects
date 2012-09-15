// Yusra Ahmed
// SDI 1209
// Project 3

//Declare Variables
var prayers = ["Dawn",
               "Midday",
               "Afternoon",
               "Dusk",
               "Evening"]
;

// String Procedure

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
    }
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
    }
    if (reciteQuran === true){
        if (assignments === true){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
};

// String Function

var quote = function(first, next){

    var string = first + samosa.type + next;
    return string
};

// Array Function

var pray = function(array) {
    var j = array.length
    ;
    for(var i=0; i<j; i++) {
        console.log("I have to pray " + array[i] + " prayer, before I continue doing anything else.")
        
        var     k = i + 1;
        
        if (i<4) {
            console.log("I've only prayed " + k + " prayers so far, I'm not done with today's prayers.")
        }else{
            console.log("The last prayer was the " + array[4] + " prayer, and I'm happy that I've done what God has asked me to do.")
        };
    };
    return array
};

// Object Function

var samosaRecipe = function(object) {
    for (var key in object) {
        console.log(key + ": " + object[key])
    }
    return object
};

// Array Procedure

var makeSamosa = function(array1, array2) {
                        console.log("The ingredients needed to make samosas are:")
                        for (var key in array1){
                            console.log("*" + array1[key])
                        }
                        console.log("The sesonings used to make samosas taste delicious are:")
                        for (var key in array2) {
                            console.log("*" + array2[key])
                        }
};

//Number Procedure
var eatSamosas = function(){
        var h = 15,
        l = 8,
        mine = h-l
        ;
    console.log("There are " + h + " samosas, I'll eat one.")
        if (h>l) {
            while (h > l) {
                h--
            console.log("There are " + h + " left. I'l stuff my face with one more.")
        }
        }else{
            console.log("There isn't enough for everyone.")
        }
        console.log("I ate " + mine + " samosas, I'll leave " + l + " for everyone else.")
}

//Main Code

procedure("ate", "already prayed")
console.log("The fact that I have recited Quran and finished my assignments is: " + booleanFunction(true, true))
console.log(quote("I'm going to make samosas with ", ". These taste delicious."))
console.log(samosaRecipe(samosa.recipe))
samosa.propertiesProcedure(samosa)
makeSamosa(samosa.recipe.Ingredients, samosa.recipe.Seasoning)
console.log("I will eat " + samosa.amountForMe(15, 8) + " samosas." )
eatSamosas()
console.log(pray(prayers))
console.log(samosa.getHowMany())
console.log(samosa.setType(samosa.type))