import { useEffect, useState } from "react"
import { Child } from "../Child";

const Father = ()  => {
    
    console.log('father 1');

    const[count,setCount] = useState(0);
    console.log('count: ', count);

    debugger
    useEffect(() =>{
        console.log('useEffect',count);
        // debugger;
        return(() => {
            // debugger;
            // setCount(0);
            console.log('return del effect');
        });
    },[count]);
  
    const clickHandler = ()=>{
        console.log('presione botoon father --------------');
        setCount(count + 1 );
        console.log('count: ', count);
        debugger
    }

    console.log('father 2');
    console.log('count: ', count);

    useEffect(()=>{
        console.log('useEffect')
    },[var1,var2])

    debugger

    return(
        <div>
            <p>Father</p>
            <button
                onClick={clickHandler}>
                Father sumar 1
            </button>
            <br />

            <Child 
                    initialCount = {0}
                    fatherCount = {count}
            >                
            </Child>
            <p>{`Father Count: ${count}`}</p>
        </div>
    );
}

export { Father };