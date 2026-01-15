import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка получения данных из localStorage", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Ошибка добавления в localStorage", error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Ошибка очистки localStorage", error);
    }
  };

  return [storedValue, setValue, removeValue];
};
