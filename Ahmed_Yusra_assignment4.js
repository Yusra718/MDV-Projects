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
    
    // Check Email Address Function
    var checkEmail = function(string) {
        var firstSign = string.indexOf("@"),
            secondSign = string.indexOf("."),
            end = string.length;
        if(isNaN(string.substring(0,firstSign))) {
            if(isNaN(string.substring(firstSign,secondSign))) {
                if(isNaN(string.substring(secondSign,end))) {
                    return true
                } else {
                    return false
                }
            }else {
                return false
            }
        } else {
            return false
        }
    };
    
    return {
        "checkPhone":   checkPhone,
        "checkEmail":   checkEmail
    };
    
};

var newLibrary = new yusraLibrary();

// I've console.logged each function a few times with different inputs to see the difference.

console.log(newLibrary.checkPhone("407-679-0100"))
console.log(newLibrary.checkPhone("tel-eph-one#"))
console.log(newLibrary.checkEmail("Yusra718@fullsail.edu"))
console.log(newLibrary.checkEmail("Yusra718fullsailedu"))
console.log(newLibrary.checkEmail("1234@5678.901"))