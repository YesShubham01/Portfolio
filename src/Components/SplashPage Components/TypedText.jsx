import React from 'react';
import { useState, useEffect } from 'react';


function TypedText() {

    const [displayTextPre, setDisplayTextPre] = useState('');
    const [displayTextPost, setDisplayTextPost] = useState('');
    const [showCurser, setShowCursor] = useState(true);


    const logWord = "Portfolio";

    const text = 'console.log();';
    const speed = 400;


    // 3 stages: stage1-> console.log(); : stage2-> console.log(""_); : stage3-> console.log("happiness_");
    useEffect(() => {
        let curserBool = true;
        let index = 0;
        let iterate = true;
        let i2 = 0;
        let logWordIndex = 0;

        const interval = setInterval(() => {
            curserBool = !curserBool;
            if (index < text.length) {
                setDisplayTextPre(text.substring(0, index + 1));
            } else if (index === text.length) {
                iterate = false;
                console.log(i2);
                console.log(logWordIndex);
                if(i2 == 0){
                }
                else if (i2 == 1) {
                    setDisplayTextPost(";");
                    setDisplayTextPre('console.log()');
                }
                else if (i2 == 2) {
                    setDisplayTextPost(");");
                    setDisplayTextPre('console.log(');
                }
                else if (i2 == 3) {

                }
                else if (i2 == 4) {
                    setDisplayTextPost('");');
                    setDisplayTextPre('console.log("');
                }
                else {
                    if (logWordIndex < logWord.length) {
                        setDisplayTextPre(prev => prev + logWord[logWordIndex]);
                        logWordIndex = logWordIndex + 1;
                    }

                }

            }
            setShowCursor(curserBool);
            if (iterate) {
                index = index === text.length ? index - 1 : index + 1;
            }
            else {
                i2 = i2 + 1;
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <h1 className='text-6xl text-left font-bold'>{displayTextPre}{showCurser ? "|" : " "}{displayTextPost}</h1>
        </div>
    )
}

export default TypedText