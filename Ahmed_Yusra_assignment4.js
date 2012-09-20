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
    
    // Check URL Function

    var checkURL = function(string) {
        var initial = string.substring(0,string.indexOf(":")),
            next = string.substring(string.indexOf(":")+1,string.indexOf(".")),
            third = string.substring(string.indexOf(".")+1,string.lastIndexOf(".")),
            end = string.substring(string.lastIndexOf(".")+1,string.length);
        if((initial === "http") || (initial === "https")) {
            return true
            } else {
                if((next === "www")) {
                    return true
                } else {
                    if((end === "com") || (end === "net") || (end === "edu") || (end === "org") || (end === "us")) {
                        return true
                    } else {
                        if(isNaN(third)){
                            return true
                        } else {
                            return false
                        }
                    }
                }
            }
    };
    
    // Changing String Seperator
    
    var fourthStringFunction = function(string) {
        string = string.replace(",","/")
        string = string.replace(",","/");
        return string
    };
    
    // Decimal Number Function
    
    var num = function(number) {
        number = number.toFixed(2);
        return number
    }
    
    return {
        "checkPhone":              checkPhone,
        "checkEmail":              checkEmail,
        "checkURL":                checkURL,
        "fourthStringFunction":    fourthStringFunction,
        "num":                     num
    };
    
};

var newLibrary = new yusraLibrary();

// I've console.logged each function a few times with different inputs to see the results of the functions.

// Phone Check
console.log(newLibrary.checkPhone("407-679-0100"))
console.log(newLibrary.checkPhone("tel-eph-one#"))

// Email Check
console.log(newLibrary.checkEmail("Yusra718@fullsail.edu"))
console.log(newLibrary.checkEmail("Yusra718fullsailedu"))
console.log(newLibrary.checkEmail("1234@5678.901"))

// URL Check
console.log(newLibrary.checkURL("https:connect.fullsail.edu"))
console.log(newLibrary.checkURL("gmail.com"))
console.log(newLibrary.checkURL("www.wikipedia.org"))
console.log(newLibrary.checkURL("https"))
console.log(newLibrary.checkURL("hello"))

// String Seperator Check
console.log(newLibrary.fourthStringFunction("JavaScript,HTML,CSS"))
console.log(newLibrary.fourthStringFunction("Interests,Hobbies,Games"))

// Decimal FUnction Check
console.log(newLibrary.num(12.178))
console.log(newLibrary.num(17))
console.log(newLibrary.num(134.8))