export const getDelay = (duration: number, callBack: () => void) => {
    setTimeout(() => {
        callBack()
    }, duration)
}