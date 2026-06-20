import React, { useState } from "react";
function Practice(){
     const [move,setMove] = useState({
          blue:0,
          red:0,
          green:0,
     });

     function handleMove(){
          setMove(
               (pre)=>{
                    return {
                         ...pre,
                         blue:pre.blue+1
                    }
               }

          )
     }
     return (
            <div>
                    <h1>Practice</h1>
                    <h2> Blue : {move.blue}</h2>
                    <button style={{backgroundColor:'blue'}} onClick={handleMove}>Move</button>   
                    <h2 > Red : {move.red}</h2>
                    <button style={{backgroundColor:'red'}} onClick={()=>setMove({...move,red:move.red+1})}>Move</button>
                    <h2 > Green : {move.green}</h2>
                    <button style={{backgroundColor:'green'}} onClick={()=>setMove({...move,green:move.green+1})}>Move</button>
               </div>
     )
}
export default Practice;