import React from 'react'
import { useState, useEffect } from 'react';

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};


function StringBg() {
    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        // Generate initial random strings during component mount
        const randomStrings = Array.from({ length: 12 }).map(() => generateRandomString(700));
        const combinedString = randomStrings.join('');

        setRandomString(combinedString);

        // Create a timer to generate new strings in a loop for 5 seconds
        const intervalId = setInterval(() => {
            const randomStrings = Array.from({ length: 12 }).map(() => generateRandomString(700));
            const combinedString = randomStrings.join('');
            setRandomString(combinedString);
        }, 80);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    function onMouseMove() {
        const randomStrings = Array.from({ length: 12 }).map(() => generateRandomString(700));
        const combinedString = randomStrings.join('');

        setRandomString(combinedString);
    }

    return (
        <>
            <div onMouseMove={onMouseMove}>
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500 mix-blend-overlay">
                    {randomString}
                </p>
            </div>

        </>
    )
}

export default StringBg