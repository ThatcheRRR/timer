import React, { useState, useEffect, useRef } from 'react';

export const Timer = ({
    initDateInMs,
}) => {
    const [timerValue, setTimerValue] = useState('');
    const converter = date => `${date.minutes}:${date.seconds}`;
    const timeoutRef = useRef(null);
    const dateFormatter = () => {
        const diff = Math.floor(new Date() - initDateInMs) / 1000;
        const minutes = Math.floor(diff / 60);
        const seconds = Math.floor(diff % 60);
        const date = { minutes, seconds };
        return converter(date);
    };
    useEffect(() => {
        if (initDateInMs) {
            console.log(new Date(initDateInMs))
            timeoutRef.current = setTimeout(function tick() {
                setTimerValue(dateFormatter());
                timeoutRef.current = setTimeout(tick, 1000);
            }, 1000);
        }
    }, [initDateInMs]);
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);
    return (
        <div>
            {timerValue}
        </div>
    );
};
