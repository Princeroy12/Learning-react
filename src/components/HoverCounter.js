import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

 class HoverCounter extends Component {
   
    render() {
        const{count,incrementCount}=this.props
    return <h1 onMouseOver={incrementCount}>{this.props.name} hovered {count} times</h1>
    }
}

export default UpdatedComponent( HoverCounter,10)
