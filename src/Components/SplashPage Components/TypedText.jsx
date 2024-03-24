import React from 'react';
import { useState, useEffect } from 'react';


function TypedText() {

    const [displayTextPre, setDisplayTextPre] = useState('');
    const [displayTextPost, setDisplayTextPost] = useState('');

    const [showCurser, setShowCursor] = useState(true);

    const TargetText = 'console.log();';
    const CompleteText = 'console.log("happiness");'
    useEffect(() => {
        const timer = setInterval(() => {
            setShowCursor(!showCurser);
            setDisplayTextPre(prev => prev + TargetText[prev.length]);
            if (displayTextPre === TargetText) {
                setDisplayTextPre('');
            }
        }, 300);
        return () => clearInterval(timer);
    }, [displayTextPre, TargetText]);

    return (
        <div>
            <h1 className='text-3xl text-left font-bold'>{displayTextPre}{showCurser ? "|" : ""}{displayTextPost}</h1>
        </div>
    )
}

export default TypedText