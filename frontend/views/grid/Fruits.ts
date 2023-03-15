import { useState } from "react";

type Fruit = { name: string; quantity: number; symbol: string };

export default function useFruits() {
  const fruits = [
    { name: "apples", quantity: 5, symbol: "🍎" },
    { name: "oranges", quantity: 3, symbol: "🍊" },
    { name: "bananas", quantity: 9, symbol: "🍌" },
    { name: "grapes", quantity: 7, symbol: "🍇" },
    { name: "cherries", quantity: 10, symbol: "🍒" },
    { name: "pineapples", quantity: 2, symbol: "🍍" },
    { name: "peaches", quantity: 6, symbol: "🍑" },
    { name: "watermelons", quantity: 1, symbol: "🍉" },
    { name: "strawberries", quantity: 4, symbol: "🍓" },
    { name: "blueberries", quantity: 8, symbol: "🫐" },
  ];
  const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([]);

  return { fruits, selectedFruits, setSelectedFruits };
}
