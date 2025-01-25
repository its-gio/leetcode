// Max Char in a string
function maxChar(item: string): string {
  const counts = item.split("").reduce(
    (acc: any, curr) => {
      acc[curr] = acc[curr] + 1 || 1;
      if (acc[curr] > acc[acc["largest"]] || !acc["largest"])
        acc["largest"] = curr;

      return acc;
    },
    { largest: "" }
  );

  return counts.largest;
}

console.log(maxChar("abcccd")); // c
console.log(maxChar("apple 1111")); // 1
// TODO: Create a function for multiple highest numbers
// console.log(maxChar("noon"));
