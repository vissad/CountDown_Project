import { useRef, useState } from "react";
import Result from "./Result";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleTimeReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(
                prevTimeReamining =>
                    prevTimeReamining - 10
            );
        }, 10
        );

    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }
    return (
        <>
            <Result targetTime={targetTime} ref={dialog} remainingTime={timeRemaining} onReset={handleTimeReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running' : 'Timer is in-active'}
                </p>
            </section>
        </>
    );
}