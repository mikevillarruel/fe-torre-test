import { useEffect, useState } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 300) => {

    const [debouceValue, setDebouceValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouceValue(input);
        }, time);

        return () => {
            clearTimeout(timeout);
        }
    }, [input])

    return debouceValue;
}