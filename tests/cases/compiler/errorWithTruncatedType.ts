// @noErrorTruncation: false

var x: {
    propertyWithAnExceedinglyLongName1: string;
    propertyWithAnExceedinglyLongName2: string;
    propertyWithAnExceedinglyLongName3: string;
    propertyWithAnExceedinglyLongName4: string;
    propertyWithAnExceedinglyLongName5: string;
};

// String representation of type of 'x' should be truncated in error message
var s: string = x;
