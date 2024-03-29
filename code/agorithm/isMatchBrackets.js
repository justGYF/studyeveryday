/**
 * 检测括号是否正常匹配
 * 正确示例： ()[{()}]
 * 错误实例： [{[(])}] --- 一个闭合的括号中不能夹在非闭合的括号
*/
// function isMatchBrackets (str) {
//     let strArr = str.split('')
//     let rightArr = ['}', ']', ')']
//     let obj = new Map([
//         ['}', '{'],
//         [']', '['],
//         [')', '('],
//     ])
//     for (let i = 0; i < strArr.length; i++) {
//         if (rightArr.includes(strArr[i])) {
//             // 当遇到右括号，检测前一位是否为对应的左括号，是则将此对置为‘0’
//             // 当值为‘0’，继续向前查找
//             // 否则就return false
//             if (i - 1 > -1) {
//                 if (strArr[i - 1] === obj.get(strArr[i])) {
//                     strArr[i] = '0'
//                     strArr[i - 1] = '0'
//                 } else if (strArr[i - 1] === '0') {
//                     let j = i - 1
//                     while (strArr[j] === '0' && j > -1) {
//                         j--
//                     }
//                     if (strArr[j] === obj.get(strArr[i])) {
//                         strArr[i] = '0'
//                         strArr[j] = '0'
//                     } else {
//                         return false
//                     }
//                 } else {
//                     return false
//                 }
//             } else {
//                 return false
//             }
//         } else if (i === strArr.length) {
//             // 最后一位为左括号，直接return false
//             return false
//         }
//     }
//     let flag = true
//     // 判断是否全为'0', 若有其他值，说明没有全部消除，return false
//     // 对应示例： (((()
//     strArr.forEach(item => {
//         if (item !== '0') {
//             flag = false
//         }
//     });
//     return flag
// }


// 好像写的复杂了 - 一个栈就能解决的问题

const isMatchBrackets = (str) => {
    let params = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    let stk = []
    // 栈存左括号，遇到右括号就开始和栈顶比较，不同就return false
    for (let i = 0; i < str.length; i++) {
        if (params[str[i]]) {
            if (!stk.length) {
                return false
            } else {
                let tag = stk.pop()
                if (params[str[i]] !== tag) return false
            }
        } else {
            stk.push(str[i])
        }
    }
    // 循环完毕，如果栈中有值，则return false
    return !stk.length
}


console.log(isMatchBrackets('()[]{}'))   // true
console.log(isMatchBrackets('('))   // false
console.log(isMatchBrackets('(()[)]{}'))  // false
console.log(isMatchBrackets('({}{{[()]}})[]{}'))  // true
console.log(isMatchBrackets('({{{{}}'))  // false
console.log(isMatchBrackets(')(({}}'))  // false

