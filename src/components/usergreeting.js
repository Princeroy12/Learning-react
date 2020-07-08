import React, { Component } from 'react'

 class usergreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: false
         }
     }
     
    render() {
        if(this.state.isLoggedIn){
        return (
            <div>
               Hello PRINCE 
            </div>
        )} else{
            return(
                <div>Welcome Guest</div>
            )
        }
    }
}

export default usergreeting
