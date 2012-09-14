var samosa ={
    
    "type":             "Chunks of Potatoes",
    "howMany":          15,
    "amountForRest":    8,
    "recipe":           {
                            "ingredients": ["Onions", "Peppers", "Ground Beef", "Scallions", "Potato Chunks"],
                            "Seasoning":        ["Curry Powder", "Cumin Powder", "Goya Seasoning", "Paprika"]
                        },
    "isDelicious":      true,
    "amountForMe":      function(){
        var amountIEat = this.howMany - this.amountForRest;
        return amountIEat
    }
};