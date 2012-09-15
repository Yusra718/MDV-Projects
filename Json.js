var samosa ={
    
    "type":                     "Chunks of Potatoes",
    "howMany":                  15,
    "recipe":                   {
                                    "Ingredients": ["Onions", "Peppers", "Ground Beef", "Scallions", "Potato Chunks"],
                                    "Seasoning":        ["Curry Powder", "Cumin Powder", "Goya Seasoning", "Paprika"]
                                },
    "isDelicious":              true,
    "amountForMe":              function(howMany, amountForRest){
                                    var amountIEat = howMany - amountForRest;
                                    return amountIEat
                                },
    "propertiesProcedure":      function(mainObject) {
                                    console.log("Here are the properties of the delicious samosas: ")
                                    for (var key in mainObject) {
                                        console.log(key + ": " + mainObject[key])
                                    }
                                }
};