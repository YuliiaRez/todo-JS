export function createID(length) {
  let result = `task+${(Math.random() * 10000).toFixed(0)}`;
  return result;
}
export const formatDate = (date) => {
  return date.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

console.log(formatDate(new Date()));

export function getDates(text) {
  let results = text.match(
    /[0-9]{1,2}([\-\/ \.])[0-9]{1,2}([\-\/ \.])((19)|(20))[0-9]{2}/g
  );

  if (results && results.length) return results;
  return [];
}
