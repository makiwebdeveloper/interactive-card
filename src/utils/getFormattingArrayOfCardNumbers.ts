export function getFormattingArrayOfCardNumbers(number: string) {
  const numberWithoutSpaces = number
    .split("")
    .filter((i) => i !== " ")
    .join("");

  const mustLength = 19;
  const formatedNumber =
    numberWithoutSpaces + "o".repeat(mustLength - number.slice(0, 16).length);

  const numberWithSpaces = formatedNumber
    .split("")
    .map((el, index) => {
      if (index === 3 || index === 7 || index === 11) {
        return el + " ";
      }

      return el;
    })
    .join("");

  return numberWithSpaces.slice(0, 19).split("");
}
