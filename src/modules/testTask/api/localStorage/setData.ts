import type { TLocalStorageDataDTO, TResponse } from './DTO'
import { CALCULATOR_AND_COUNTER } from './keys'

const DELAY_SET_DATA = 1000

export function setCalculatorAndCounterData(data: TLocalStorageDataDTO): Promise<TResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(CALCULATOR_AND_COUNTER, JSON.stringify(data))
      resolve({ success: true })
    }, DELAY_SET_DATA)
  })
}
