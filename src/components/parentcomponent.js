import React, { Component } from 'react'
import Childcomponent from './childcomponent'

 class parentcomponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName:"parent"
         }
     }
     greetParent=(childName)=>{
         alert(`Hello ${this.state.parentName} from ${childName}`)
     }
     
    render() {
        return (
            <div>
                <Childcomponent greetHandler={this.greetParent} /> 
            </div>
        )
    }
}

export default parentcomponent
