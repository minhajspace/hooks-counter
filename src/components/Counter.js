import React, { useState } from 'react'

let userInput;

const Counter = () => {
    const initalValue = 0;
    const [counter, setCounter] = useState(initalValue)


    return (
        <div className="ui cards">
            <div className="card">
                <div className="content ">

                    <h1><center>{counter}</center></h1>

                </div>


                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={() => setCounter(counter + 1)} >Increment</div>
                        <div className="ui basic red button" onClick={() => setCounter(counter - 1)}>Decrement</div>


                    </div>

                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic brown button" >Jump to </div>

                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic black button" onClick={() => setCounter(initalValue)} >Reset</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Counter; 
