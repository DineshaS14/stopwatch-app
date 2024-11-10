import react, {useState, useEffect} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect (()=> {
        let intervalId;
        if(running) {
            // if running is true at the time.
            // using setInterval: Repeated tasks.(built in method).
            intervalId = setInterval(() => {
                setSeconds((prevSeconds)=> prevSeconds + 1);
            }, 1000);
        }
        // clearInterval(js built in function to clear intervalId).
        return () => clearInterval(intervalId);
    }, [running]);
    const handleStartStop = () => setRunning(!running); // so if its running then it stops running and vise versa.
    const handleReset = () => {
        setSeconds(0);
        setRunning(false);
    }; // handleReset
    return (
        <div>
            <h2>Stopwatch</h2>
            <div>
                {seconds} seconds
            </div>
            <button onClick={handleStartStop}>
                {running? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
} // Stopwatch
export default Stopwatch;