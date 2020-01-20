import React, { useState } from 'react'

const Counter = () => {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content ">

                    <h1><center></center></h1>

                </div>


                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" >Increment</div>
                        <div className="ui basic red button" >Decrement</div>


                    </div>

                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic brown button" >Jump to </div>

                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic black button" >Reset</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Counter; 
