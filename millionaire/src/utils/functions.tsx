export const getDelay = (duration: number, callBack: () => void) => {
  setTimeout(() => {
    callBack();
  }, duration);
};

export const getMoneyFromNumber = (num: number | string) => `$${Number(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;

export const getVariantOrder = (index: number) => {
  switch (index) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
    default:
      return "A";
  }
};

export const getMoneyClass = (questionsNumber: number, id: number) => {
  if (questionsNumber === id) {
    return ("money-block active");
  }

  if (questionsNumber >= id) {
    return ("money-block disable");
  }

  return ("money-block");
};
