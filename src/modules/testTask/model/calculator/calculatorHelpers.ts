import type { TQueue } from './calculatorTypes'

export function convertInputValueInNumber(value: string): number | null {
  const convertedValue = Number(value)

  if (Number.isNaN(convertedValue)) return null

  return convertedValue
}

export function getCurrentQueue(
  queue: TQueue,
  changedField: 'price' | 'quantity' | 'amount',
): TQueue {
  switch (changedField) {
    case 'amount': {
      return ['amount', ...queue.filter((item) => item !== 'amount')]
    }
    case 'price': {
      return ['price', ...queue.filter((item) => item !== 'price')]
    }
    case 'quantity': {
      return ['quantity', ...queue.filter((item) => item !== 'quantity')]
    }
    default: {
      return queue
    }
  }
}

export function calculateAmount({ price, quantity }: { price: number; quantity: number }) {
  return price * quantity
}

export function calculatePrice({ quantity, amount }: { quantity: number; amount: number }) {
  return amount / quantity
}

export function calculateQuantity({ price, amount }: { price: number; amount: number }) {
  return amount / price
}
