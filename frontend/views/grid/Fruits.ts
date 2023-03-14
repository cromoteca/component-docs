import { useEffect, useState } from "react";

export type Fruit = { name: string, quantity: number, symbol: string };

export function useFruits() {
    const [fruits, setFruits] = useState<Fruit[]>([]);
    const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([]);

    useEffect(() => {
        // simulate getting data from the server
        setFruits([
            { name: 'apples', quantity: 5, symbol: '🍎' },
            { name: 'oranges', quantity: 3, symbol: '🍊' },
            { name: 'bananas', quantity: 9, symbol: '🍌' },
            { name: 'grapes', quantity: 7, symbol: '🍇' },
            { name: 'cherries', quantity: 10, symbol: '🍒' },
            { name: 'pineapples', quantity: 2, symbol: '🍍' },
            { name: 'peaches', quantity: 6, symbol: '🍑' },
            { name: 'watermelons', quantity: 1, symbol: '🍉' },
            { name: 'strawberries', quantity: 4, symbol: '🍓' },
            { name: 'blueberries', quantity: 8, symbol: '🫐' },
            
        ]);
    }, []);

    return { fruits, selectedFruits, setSelectedFruits };
}
