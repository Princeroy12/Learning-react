import React, { Component, createRef } from 'react'


class Input extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=createRef();
    }
    focusinput(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default Input
