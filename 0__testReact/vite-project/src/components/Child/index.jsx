import { useState } from "react";

const Child = ({initialCount, fatherCount}) => {

    const[countChild,setCountChild] = useState(initialCount);

    const clickHandler = () => {
        setCountChild(countChild+1);
    };

    console.log('child 1');

    return(
        <div>
            
            <p style={{marginLeft: 40}} >
                {`Child Count: ${countChild}`}
            </p>
            <p style={{marginLeft: 40}}>
                {`fatherCount Count from child: ${fatherCount}`}
            </p>
            <button style={{marginLeft: 40}}
                onClick={clickHandler} > 
                Child: sumar 1 
            </button>
            <br />

        </div>
    );
}

export { Child };