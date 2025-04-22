"use client";
import { useState, useEffect, useRef } from "react";

export function useCounterModel() {
  const [counter, setCounter] = useState<number>(0);
  const idTimeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    function increment() {
      setCounter((counter) => counter + 1);
    }

    function tick() {
      idTimeout.current = setTimeout(() => {
        increment();
        tick();
      }, 1000);
    }

    tick();
  }, []);

  useEffect(() => {
    return () => {
      if (idTimeout.current === null) return;

      clearTimeout(idTimeout.current);
    };
  }, []);

  return { counter };
}
