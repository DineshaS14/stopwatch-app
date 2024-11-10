import React, { useState, useEffect } from "react";
/*
Clock Component
Step 1: Initialize State
const [currentTime, setCurrentTime] = useState(new Date());
Current Time State → Thu Nov 10 2023 14:30:00 GMT-0500
Step 2: Create Interval (useEffect)
useEffect(() => { ... }, []);
Interval → Updates currentTime every 1 second
Step 3: Calculate EST Offset
const estOffset = -5 * 60 * 60 * 1000;
EST Offset → -18000000 (UTC-5 hours in milliseconds)
Step 4: Calculate EST Time
const estTime = new Date(currentTime.getTime() + estOffset);
EST Time → Thu Nov 10 2023 09:30:00 GMT-0500
Step 5: Format Time and Date
formattedTime → 9:30:00 AM
formattedDate → Thursday, November 10, 2023
Step 6: Render
Jsx
<h2>
  Current Time (EST): {formattedTime} | {formattedDate}
</h2>
Output:
Current Time (EST): 9:30:00 AM | Thursday, November 10, 2023
                      +---------------+
                      |  Initial State  |
                      +---------------+
                             |
                             |
                             v
                      +---------------+
                      |  Create Interval  |
                      |  (useEffect)      |
                      +---------------+
                             |
                             |
                             v
                      +---------------+
                      |  Calculate EST   |
                      |  Offset          |
                      +---------------+
                             |
                             |
                             v
                      +---------------+
                      |  Calculate EST   |
                      |  Time            |
                      +---------------+
                             |
                             |
                             v
                      +---------------+
                      |  Format Time &   |
                      |  Date          |
                      +---------------+
                             |
                             |
                             v
                      +---------------+
                      |  Render Output   |
                      +---------------+
*/
function Clock() {
    // new Date() Creates Date object from milliseconds.
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
    // Creates an interval using setInterval.
    // updates currentTime state every 1 second
    //returns a cleanup function to clear interval
      const intervalId = setInterval(()=> {
        setCurrentTime(new Date());
      }, 1000)  
      return () => clearInterval(intervalId);
    },[]);
    const estOffset = -1 * 60 * 60 * 1000; // converts hours to mili seconds and UTC -5 hours.
    // calcula
    const estTime = new Date(currentTime.getTime() + estOffset); // getTime returns time in miliseconds.
    // now estTime creates a new Date Obj with EST offset
    const formattedTime = estTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      const formattedDate = estTime.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    
      return (
        <div>
          <h2>
            Current Time (EST): {formattedTime} | {formattedDate}
          </h2>
        </div>
      );
    
    
   
} // Clock
export default Clock;