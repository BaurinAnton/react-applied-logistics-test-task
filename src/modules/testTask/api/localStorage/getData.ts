import { CALCULATOR_AND_COUNTER } from './keys'

export function getCalculatorAndCounterData(): string | null {
  const jsonData = localStorage.getItem(CALCULATOR_AND_COUNTER)
  if (jsonData === null) return null

  return jsonData
  // Если бы требовалось возвращаемым значением - объект:
  // const parsedData = JSON.parse(jsonData)
  // const validatedData = validateData(parsedData)

  // return validatedData
}

// function validateData(data: unknown): TLocalStorageDataDTO | null {
//   if (isValidData(data)) {
//     return data
//   }

//   return null
// }

// function isValidData(data: unknown): data is TLocalStorageDataDTO {
//   return (
//     typeof data === 'object' &&
//     data !== null &&
//     'counter' in data &&
//     'price' in data &&
//     'quantity' in data &&
//     'amount' in data &&
//     isNumber(data.counter) &&
//     isNumber(data.price) &&
//     isNumber(data.quantity) &&
//     isNumber(data.amount)
//   )
// }

// function isNumber(x: unknown): x is number {
//   return typeof x === 'number'
// }
