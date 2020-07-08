import React from 'react'

function functionclick() {
    function clickHandler(){
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>CLICK</button>
        </div>
    )
}

export default functionclick
