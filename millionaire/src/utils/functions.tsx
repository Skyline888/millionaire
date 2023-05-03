export const getDelay = (duration: number, callBack: () => void) => {
    setTimeout(() => {
        callBack()
    }, duration)
}

export const getMoneyFromNumber = (num: number) => {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const geVariantOrder = (index: number) => {
    switch (index) {
        case 0:
          return "A";
        case 1:
          return 'B';
        case 2:
          return "C"
        case 3:
          return "D"
        default:
          return "A";
      }
}

