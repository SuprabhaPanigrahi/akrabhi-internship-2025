import { useState, useEffect } from "react";

export const CurrentTime = () => {

    const timer=new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []); 

    return (
        <>
            <h1>Current Time is: {currentTime}</h1>
        </>
    );
};