function getItemsAt(arr, evenOrOdd) {
  if (evenOrOdd === "even") {
    if (arr.length % 2 == 0) {
      return arr.filter((element, index, array) => {
        return index % 2 == 0;
      });
    } else {
      return arr.filter((element, index, array) => {
        return (index + 1) % 2 == 0;
      });
    }
  }
  if (evenOrOdd === "odd") {
    if (arr.length % 2 == 0) {
      return arr.filter((element, index, array) => {
        return (index + 1) % 2 == 0;
      });
    } else {
      return arr.filter((element, index, array) => {
        return index % 2 == 0;
      });
    }
  }
}
console.log(getItemsAt([2, 4, 6, 8, 10], "odd"));
console.log(getItemsAt(["E", "D", "A", "B", "I", "T"], "even"));
console.log(
  getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even")
);
