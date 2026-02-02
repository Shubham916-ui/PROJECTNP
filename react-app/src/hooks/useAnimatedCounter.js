import { useState, useEffect } from 'react';

export const useAnimatedCounter = (target, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startValue = 0;
        const increment = target / (duration / 16); // 60fps

        const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(startValue));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration, start]);

    return count;
};
