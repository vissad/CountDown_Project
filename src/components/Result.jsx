import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'
const ResultModal = forwardRef(function Result({ onReset, targetTime, remainingTime }, ref) {

    const uesrLost = remainingTime <= 0;

    const formatedRemainingTime = (remainingTime / 1000).toFixed(2);

    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {

            open() {
                x

                dialog.current.showModal();

            }

        }
    })

    return (createPortal(<dialog className="result-modal" ref={dialog} onClose={onReset}>

        {uesrLost && <h2> You Lost</h2>}
        {!uesrLost && <h2>Your score: {score}</h2>}
        <p>
            The target time was <strong>{targetTime} seconds.</strong>
        </p>

        <p>
            You stopped the timer with <strong>{formatedRemainingTime} seconds left.</strong>
        </p>

        <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>

    </dialog>,
        document.getElementById('modal')
    )
    );

})

export default ResultModal;