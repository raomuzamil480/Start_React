import {getHelper,sum} from './helper';
import { useState } from 'react';
function Lotary(){
     const [lotary, setLotary] = useState(getHelper(3));
     let isWin = sum(lotary) === 15;
     if(isWin){
          alert('You Win');
     }
     let handleClick = ()=>{
          setLotary(getHelper(3));
     }
     return(
         <div>
             <h1>Lotary</h1>
                <h2> {lotary[0]} {lotary[1]} {lotary[2]}</h2>
                <button onClick={handleClick}>Generate New Numbers</button>
                {isWin && <h2>Congratulations! You Win!</h2>}
         </div>
     )
     
}

export default Lotary;