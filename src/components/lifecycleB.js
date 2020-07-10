import React, { Component } from 'react'

 class lifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Prince'
         }
         console.log("lifecycle B constructor")
     }
     static getDerivedStateFromProps(props,state){
         console.log("lifecycle B getDerivedstatefromprops")
         return null;
     }
     componentDidMount(){
         console.log(" lifecylce B componentdidmount")
     }
     shouldComponentUpdate(){
        console.log("lifecycle B shouldcomponemtupdate")
        return true;
    }
    getSnapshotBeforeUpdate(PrevProps,PrevState){
        console.log("lifecycle B getsnapshotforupdate")
        return null;
    }
    componentDidUpdate(){
        console.log("lifecycle B componentdid update")
    }
    render() {
        console.log("lifecycle B render")
        return (
            <div>
              Life Cycle B 
            </div>
        )
    }
}

export default lifecycleB
