import React, { useState } from 'react'

let userInput;

const Counter = () => {
    const initalValue = 0;
    const [counter, setCounter] = useState(initalValue)

    const Increment = () => {
        setCounter(prevCount => prevCount + 1)
    }
    const Decrement = () => {
        setCounter(prevCount => prevCount - 1)
    }
    const Reset = () => {
        setCounter(initalValue)
    }
    const Jump = () => {
        setCounter(userInput = parseInt(prompt("plese enter the number")))
        console.log(userInput)
    }

    return (
        <div className="ui cards">
            <div className="card">
                <div className="content ">

                    <h1><center>{counter}</center></h1>

                </div>


                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={Increment} >Increment</div>
                        <div className="ui basic red button" onClick={Decrement}>Decrement</div>


                    </div>

                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic brown button" onClick={Jump}>Jump to </div>

                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic black button" onClick={Reset} >Reset</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Counter; 
