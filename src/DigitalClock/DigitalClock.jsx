import React, {useEffect, useState} from 'react';
import styles from "./DigitalClock.module.css"
import tick from '../assets/tick.mp3'

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(() =>{
            setTime(new Date());
            let sound = new Audio(tick);
            sound.volume = 0.3;
            sound.play()
        }, 1000)

        return () =>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number
    }

    return(
        <div className={styles.clockContainer}>
            <div className={styles.clock}>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;