"use strict";
let numArray = [1, 2, 3, 4, 5];
let strArray = ['a', 'b', 'c', 'd', 'e'];
let boolArray = [true, false, true, false, true];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let size = Size.Large;
console.log(size);
//# sourceMappingURL=index.js.map