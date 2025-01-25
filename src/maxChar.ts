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
// console.log(maxChar("noon"));
