import {useState} from 'react';
import Output from './Output';

const Greeting=()=>{

    const [changedText,setChangedText ]=useState(false)
   
   const changeTexthandler=()=>{
    setChangedText(true);
   }

    return (
        <div>
            <h1>Hello World</h1>
            {changedText && <Output>It good to see you!</Output> } 
            {!changedText && <Output>changed!</Output>}
            <button onClick={changeTexthandler}>change Text</button>
        </div>
    )
}
export default Greeting