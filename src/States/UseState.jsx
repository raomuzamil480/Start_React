import React, { useState } from 'react';
function State (){
     let [count, setCount] = useState(0);
     let increaseCount = () => {
          
          setCount(count + 1);
          console.log(count);
     };
     return (
         <div>
             <h1>State</h1>
                <button onClick={increaseCount}>Increase Count</button>
                <p>Count: {count}</p>
         </div>
     )
}
export default State;