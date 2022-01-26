// Algo for Creating a function of checkDataType

// Step 1 :- Check if input item data type is null or undefined
// Step 1.1 :-If step 1 is truthy, return please enter currect value
// Step 2:- Check if input item data type is array,
// Step 2.1:-If step 3 is truthy, return enter input item data type is array
// Step 3:- Check if input item data type is "",itember,bolean,ininity,NaN,function,object
// Step 3.1 :-If step 3 is truthy, return it

function checkDataType(item) {
  if (item === null || item === undefined) {
    return "Please enter currect value";
  }
  let array = Array.isArray(item);
  if (array === true) {
    return "Input item is array";
  }
  return typeof item;
}
console.log(checkDataType(Infinity));
