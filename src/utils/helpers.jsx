export function renderYears(year) {
  let age = (2021 - year).toString();
  let yearWord;
  if (age.length === 1) {
    switch (true) {
      case age === "1": {
        yearWord = age + " год";
        break;
      }
      case age < 5: {
        yearWord = age + " года";
        break;
      }
      case 4 < age: {
        yearWord = age + " лет";
        break;
      }
      default:
        break;
    }
  }
  if (age.length === 2) {
    switch (true) {
      case age[1] === "1": {
        yearWord = age + " год";
        break;
      }
      case age[1] < 5: {
        yearWord = age + " года";
        break;
      }
      case 4 < age[1]: {
        yearWord = age + " лет";
        break;
      }
      default:
        break;
    }
  }
  return yearWord;
}
