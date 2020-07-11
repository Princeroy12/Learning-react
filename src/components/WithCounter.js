import React from 'react'

const UpdatedComponent=(OrignalComponent,incno)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount=()=>{
            this.setState(PrevState=>{
                return {count: PrevState.count+incno}
            })
        }
        render(){
            console.log(this.props.name)
            return (
            <OrignalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
            />
            )
        }  
    }
    return NewComponent
}
export default UpdatedComponent