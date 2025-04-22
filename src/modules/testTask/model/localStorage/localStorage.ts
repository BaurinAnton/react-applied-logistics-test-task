import { isEven } from "@/app/utils";
import { useState } from "react";
import {
  getCalculatorAndCounterData,
  setCalculatorAndCounterData,
} from "../../api/localStorage";
import {
  TCalculatorModel,
  TCounterModel,
  TQueueEventModel,
} from "./localStorageTypes";
import { TLocalStorageDataDTO } from "../../api/localStorage/DTO";

export function useLocalStorageModel(
  calculatorModel: TCalculatorModel,
  queueEventModel: TQueueEventModel,
  counterModel: TCounterModel
) {
  const [dataLocalStorage, setDataLocalStorage] = useState<string | null>(null);

  function setDataForLocalStorage() {
    if (!isEven(calculatorModel.amount)) return;

    const data: TLocalStorageDataDTO = {
      amount: calculatorModel.amount,
      price: calculatorModel.price,
      quantity: calculatorModel.quantity,
      counter: counterModel.counter,
    };

    queueEventModel.setEvent(
      `событие нажатия кнопки 4 - приложить то что было отправлено: ${JSON.stringify(
        data
      )}`
    );

    queueEventModel.setEvent(
      `событие нажатия кнопки 4 - показать то что в момент нажатия в localStorage: ${getCalculatorAndCounterData()}`
    );

    setCalculatorAndCounterData(data).then((status) => {
      alert(`Статус отправки: ${status.success}`);
      queueEventModel.setEvent(
        "событие когда получили ответ после нажатия submit (4)" +
          "- приложить то что было отправлено: " +
          JSON.stringify(data)
      );
      queueEventModel.setEvent(
        "событие когда получили ответ после нажатия submit (4)" +
          " + то что в этот момент в localStorage: " +
          getCalculatorAndCounterData()
      );
      getDataForLocalStorage();
    });
  }

  function getDataForLocalStorage() {
    setDataLocalStorage(getCalculatorAndCounterData());
  }

  return { dataLocalStorage, setDataForLocalStorage };
}
