const CheckNumber = (num) => {
  if (num === "" || num === null || num === undefined || num === false) {
    console.log(0);
  }
  if (Number(num)) {
    console.log("This is number", num);
  }
  if (!Number(num)) {
    console.log(0);
  }
  if (num === true) {
    console.log(1);
  }
};
CheckNumber("true");
