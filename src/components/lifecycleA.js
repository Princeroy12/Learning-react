import React, { Component } from 'react'
import LifecycleB from './lifecycleB'

 class lifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Prince'
         }
         console.log("lifecycle A constructor")
     }
     static getDerivedStateFromProps(props,state){
         console.log("lifecycle A getDerivedstatefromprops")
         return null;
     }
     componentDidMount(){
         console.log(" lifecylce A componentdidmount")
     }
     shouldComponentUpdate(){
         console.log("lifecycle A shouldcomponemtupdate")
         return true;
     }
     getSnapshotBeforeUpdate(PrevProps,PrevState){
         console.log("lifecycle A getsnapshotforupdate")
         return null;
     }
     componentDidUpdate(){
         console.log("lifecycle A componentdid update")
     }
     handleChange=()=>{
         this.setState({
             name:"Prince Roy"
         })
     }
    render() {
        console.log("lifecycle A render")
        return (
            <div>
            <div>
              Life Cycle A  
            </div>
            <button onClick={this.handleChange}>Change State</button>
           <LifecycleB />
            </div>
        )
    }
}

export default lifecycleA
