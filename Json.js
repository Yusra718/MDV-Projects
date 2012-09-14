var samosa ={
    
    "type":             "Chunks of Potatoes",
    "howMany":          15,
    "recipe":           {
                            "ingredients": ["Onions", "Peppers", "Ground Beef", "Scallions", "Potato Chunks"],
                            "Seasoning":        ["Curry Powder", "Cumin Powder", "Goya Seasoning", "Paprika"]
                        },
    "isDelicious":      true,
    "amountForMe":      function(howMany, amountForRest){
        var amountIEat = howMany - amountForRest;
        return amountIEat
    }
};