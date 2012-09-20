// Yusra Ahmed
// SDI 1209
// Project 4
// Library of Functions

var yusraLibrary = function() {
    
    // Check Phone Number Function
    var checkPhone = function(string) {
        if(isNaN(string.substring(0,2))) {
            return false
        } else {
            if(isNaN(string.substring(4,6))) {
                return false
            } else {
                if(isNaN(string.substring(8,11))) {
                    return false
                } else {
                    return true
                }
            }
        }
    };
    
    
    return {
        "checkPhone":   checkPhone
    };
    
};

var newLibrary = new yusraLibrary();

console.log(newLibrary.checkPhone("407-679-0100"))