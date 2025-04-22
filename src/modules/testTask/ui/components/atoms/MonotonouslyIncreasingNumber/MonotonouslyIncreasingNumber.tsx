import { useCounterContext } from "../../../../model/calculatorAndCounter";

export function MonotonouslyIncreasingNumber() {
  const counterModel = useCounterContext();

  if (!counterModel) return null;

  return <p>Count: {counterModel.counter} - монотонно возрастающее число</p>;
}
