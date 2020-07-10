import React, { Component, createRef } from 'react'
import Input from './input'

 class Focusfile extends Component {
     constructor(props) {
         super(props)
     
         this.componentRef=createRef()
     }
     clickHandler=()=>{
         this.componentRef.current.focusinput()
     }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default Focusfile
