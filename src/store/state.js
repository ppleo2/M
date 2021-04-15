var defaulNum = '1'
try {
    if (localStorage.num) {
        defaulNum = localStorage.num
    }
} catch (e) {}
export default {
    num: defaulNum
}
