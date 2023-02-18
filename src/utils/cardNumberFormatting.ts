export function cardNumberFormatting(number: string) {
  const arrOfNumberWithoutSpaces = number.split("").filter((i) => i !== " ");
  const numberWithSpaces = arrOfNumberWithoutSpaces
    .map((el, index) => {
      if (index === 3 || index === 7 || index === 11) {
        return el + " ";
      }

      return el;
    })
    .join("");

  return numberWithSpaces.slice(0, 19);
}
