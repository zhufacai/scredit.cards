export interface CreditCard {
  id: string
  number: string // 后4位
  secretCVV: string // 加密后的CVV
  type: "visa" | "master" | "unionpay" | "amex" | "discover"
  name?: string // 卡片名称（可选）
  validThru: string // 有效期（格式：MM/YY）
}

export const creditCards: CreditCard[] = [
  {
    id: "1",
    number: "•••• •••• •••• 1963",
    secretCVV: "U2FsdGVkX1/51HK0IAozflI8/bey/Hv6umAeAr4rtSE=", // 示例加密字符串
    type: "visa",
    name: "工行 全币种国际信用卡",
    validThru: "妈妈电话号码第5位和最一位/27",
  },
  {
    id: "2",
    number: "•••• •••• •••• 3939",
    secretCVV: "U2FsdGVkX1+7R80R0JuH0MCQzqoZ5AUNk5V9VaJj3wU=", // 示例加密字符串
    type: "unionpay",
    name: "工行",
    validThru: "妈妈电话号码第5位和最一位/27",
  },
  {
    id: "3",
    number: "•••• •••• •••• 9219",
    secretCVV: "U2FsdGVkX1+3pG2DR0s2ykRBlpMcVUccM6+Z3lIbOxY=", // 示例加密字符串
    type: "unionpay",
    name: "农行",
    validThru: "妈妈电话号码第5位和第3位/27",
  },
  {
    id: "4",
    number: "•••• •••• •••• 7115",
    secretCVV: "U2FsdGVkX1/KluyjbZlUQDo1wlOha799uf7wPVPwud0=", // 示例加密字符串
    type: "unionpay",
    name: "浦发",
    validThru: "妈妈电话号码第1位和第6位/27",
  },
]
