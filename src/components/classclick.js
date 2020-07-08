import React, { Component } from 'react'

class classclick extends Component {
    clickHandler(){
        console.log("BUTTON WAS clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>CLICK ME</button>
            </div>
        )
    }
}

export default classclick
